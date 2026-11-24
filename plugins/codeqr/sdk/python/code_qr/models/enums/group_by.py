from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupBy(str, Enum):
    """The parameter to group the analytics data points by. Defaults to 'count' if undefined."""

    TIMESERIES = "timeseries"
    CLICKS = "clicks"
    COUNT = "count"
    TOTALS = "totals"
    TOP_URLS = "top_urls"
    TOP_LINKS = "top_links"
    TOP_QRCODES = "top_qrcodes"
    TOP_PAGES = "top_pages"
    TOP_EVENTS = "top_events"
    SCANS = "scans"
    VIEWS = "views"
    COUNTRY = "country"
    CITY = "city"
    REGION = "region"
    DEVICES = "devices"
    BROWSERS = "browsers"
    OS = "os"
    REFERERS = "referers"
    REFERER_URLS = "referer_urls"
    TREND_LIVE = "trend_live"
    KPIS = "kpis"
    ANALYTICS = "analytics"
    CONTINENTS = "continents"
    COUNTRIES = "countries"
    CITIES = "cities"
    LEADS = "leads"
    SALES = "sales"
    COMPOSITE = "composite"
    UTM_SOURCES = "utm_sources"
    UTM_MEDIUMS = "utm_mediums"
    UTM_CAMPAIGNS = "utm_campaigns"
    UTM_CONTENTS = "utm_contents"
    UTM_TERMS = "utm_terms"

    __str__ = str.__str__


GroupByOrStr: TypeAlias = Annotated[GroupBy | str, open_enum_validator(GroupBy)]
