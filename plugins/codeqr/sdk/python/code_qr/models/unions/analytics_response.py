from __future__ import annotations

from typing import TypeAlias

from ..analytics_browsers import AnalyticsBrowsers, AnalyticsBrowsersDict
from ..analytics_cities import AnalyticsCities, AnalyticsCitiesDict
from ..analytics_continents import AnalyticsContinents, AnalyticsContinentsDict
from ..analytics_count import AnalyticsCount, AnalyticsCountDict
from ..analytics_countries import AnalyticsCountries, AnalyticsCountriesDict
from ..analytics_devices import AnalyticsDevices, AnalyticsDevicesDict
from ..analytics_os import AnalyticsOs, AnalyticsOsDict
from ..analytics_referer_urls import AnalyticsRefererUrls, AnalyticsRefererUrlsDict
from ..analytics_referers import AnalyticsReferers, AnalyticsReferersDict
from ..analytics_regions import AnalyticsRegions, AnalyticsRegionsDict
from ..analytics_timeseries import AnalyticsTimeseries, AnalyticsTimeseriesDict
from ..analytics_top_links import AnalyticsTopLinks, AnalyticsTopLinksDict
from ..analytics_top_urls import AnalyticsTopUrls, AnalyticsTopUrlsDict

AnalyticsResponse: TypeAlias = (
    AnalyticsCount
    | list[AnalyticsTimeseries]
    | list[AnalyticsContinents]
    | list[AnalyticsCountries]
    | list[AnalyticsRegions]
    | list[AnalyticsCities]
    | list[AnalyticsDevices]
    | list[AnalyticsBrowsers]
    | list[AnalyticsOs]
    | list[AnalyticsReferers]
    | list[AnalyticsRefererUrls]
    | list[AnalyticsTopLinks]
    | list[AnalyticsTopUrls]
)

AnalyticsResponseDict: TypeAlias = (
    AnalyticsCountDict
    | list[AnalyticsTimeseriesDict]
    | list[AnalyticsContinentsDict]
    | list[AnalyticsCountriesDict]
    | list[AnalyticsRegionsDict]
    | list[AnalyticsCitiesDict]
    | list[AnalyticsDevicesDict]
    | list[AnalyticsBrowsersDict]
    | list[AnalyticsOsDict]
    | list[AnalyticsReferersDict]
    | list[AnalyticsRefererUrlsDict]
    | list[AnalyticsTopLinksDict]
    | list[AnalyticsTopUrlsDict]
)
