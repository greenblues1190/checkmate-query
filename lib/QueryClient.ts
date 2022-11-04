export class QueryClient {
	dataCache: Record<string, any> = {};
	queryCache?: () => Promise<void>;

	invalidateQueries(key: string) {
		delete this.dataCache[key];
	}

	isCached(key: string) {
		return Object.prototype.hasOwnProperty.call(this.dataCache, key);
	}

	setQueryCache(query: () => Promise<void>) {
		this.queryCache = query;
	}

	clearQueryCache() {
		delete this.queryCache;
	}

	reQueryCache() {
		if (this.queryCache) {
			this.queryCache();
			this.clearQueryCache();
		}
	}
}
