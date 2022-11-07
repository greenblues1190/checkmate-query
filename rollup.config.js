import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			// peerDepsExternal(),
			// terser(),
			json(),
			commonjs(),
			resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
			typescript(),
		],
		external: ['react'],
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'iife' }],
		plugins: [dts()],
	},
];
