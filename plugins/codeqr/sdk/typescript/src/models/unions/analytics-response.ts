import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { analyticsBrowsersSchema, type AnalyticsBrowsers } from "../analytics-browsers.js";
import { analyticsCitiesSchema, type AnalyticsCities } from "../analytics-cities.js";
import { analyticsContinentsSchema, type AnalyticsContinents } from "../analytics-continents.js";
import { analyticsCountSchema, type AnalyticsCount } from "../analytics-count.js";
import { analyticsCountriesSchema, type AnalyticsCountries } from "../analytics-countries.js";
import { analyticsDevicesSchema, type AnalyticsDevices } from "../analytics-devices.js";
import { analyticsOsSchema, type AnalyticsOs } from "../analytics-os.js";
import { analyticsRefererUrlsSchema, type AnalyticsRefererUrls } from "../analytics-referer-urls.js";
import { analyticsReferersSchema, type AnalyticsReferers } from "../analytics-referers.js";
import { analyticsRegionsSchema, type AnalyticsRegions } from "../analytics-regions.js";
import { analyticsTimeseriesSchema, type AnalyticsTimeseries } from "../analytics-timeseries.js";
import { analyticsTopLinksSchema, type AnalyticsTopLinks } from "../analytics-top-links.js";
import { analyticsTopUrlsSchema, type AnalyticsTopUrls } from "../analytics-top-urls.js";

export type AnalyticsResponse =
  | AnalyticsCount
  | AnalyticsTimeseries[]
  | AnalyticsContinents[]
  | AnalyticsCountries[]
  | AnalyticsRegions[]
  | AnalyticsCities[]
  | AnalyticsDevices[]
  | AnalyticsBrowsers[]
  | AnalyticsOs[]
  | AnalyticsReferers[]
  | AnalyticsRefererUrls[]
  | AnalyticsTopLinks[]
  | AnalyticsTopUrls[];

export const analyticsResponseSchema: Schema<AnalyticsResponse> = s.of<AnalyticsResponse>(
  s.union([
    s.lazy(() => analyticsCountSchema),
    s.array(s.lazy(() => analyticsTimeseriesSchema)),
    s.array(s.lazy(() => analyticsContinentsSchema)),
    s.array(s.lazy(() => analyticsCountriesSchema)),
    s.array(s.lazy(() => analyticsRegionsSchema)),
    s.array(s.lazy(() => analyticsCitiesSchema)),
    s.array(s.lazy(() => analyticsDevicesSchema)),
    s.array(s.lazy(() => analyticsBrowsersSchema)),
    s.array(s.lazy(() => analyticsOsSchema)),
    s.array(s.lazy(() => analyticsReferersSchema)),
    s.array(s.lazy(() => analyticsRefererUrlsSchema)),
    s.array(s.lazy(() => analyticsTopLinksSchema)),
    s.array(s.lazy(() => analyticsTopUrlsSchema)),
  ]),
);
