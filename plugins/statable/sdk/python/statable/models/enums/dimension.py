from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Dimension(str, Enum):
    """At most one per query. A time dimension yields a series; a breakdown dimension yields top-N rows. Not every
    metric is valid for every breakdown — a metric the builder does not compute returns ``metric_not_available``. In
    addition to the enum below, a dynamic ``event:props:<key>`` dimension breaks a custom event down by one of its
    property values (metrics ``visitors`` + ``events``); it requires an ``event`` filter to name the event, else
    ``event_filter_required``."""

    TIME = "time"
    TIME_MINUTE = "time:minute"
    TIME_HOUR = "time:hour"
    TIME_DAY = "time:day"
    TIME_WEEK = "time:week"
    TIME_MONTH = "time:month"
    VISIT_SOURCE = "visit:source"
    VISIT_REFERRER = "visit:referrer"
    VISIT_CHANNEL = "visit:channel"
    VISIT_UTM_SOURCE = "visit:utm_source"
    VISIT_UTM_MEDIUM = "visit:utm_medium"
    VISIT_UTM_CAMPAIGN = "visit:utm_campaign"
    VISIT_UTM_CONTENT = "visit:utm_content"
    VISIT_UTM_TERM = "visit:utm_term"
    VISIT_COUNTRY = "visit:country"
    VISIT_REGION = "visit:region"
    VISIT_CITY = "visit:city"
    VISIT_BROWSER = "visit:browser"
    VISIT_BROWSER_VERSION = "visit:browser_version"
    VISIT_OS = "visit:os"
    VISIT_OS_VERSION = "visit:os_version"
    VISIT_DEVICE = "visit:device"
    VISIT_ENTRY_PAGE = "visit:entry_page"
    VISIT_EXIT_PAGE = "visit:exit_page"
    EVENT_PAGE = "event:page"
    EVENT_FOLDER = "event:folder"
    EVENT_HOSTNAME = "event:hostname"
    EVENT_NAME = "event:name"
    EVENT_GOAL = "event:goal"
    EVENT_STATUS_CODE = "event:status_code"

    __str__ = str.__str__


DimensionOrStr: TypeAlias = Annotated[Dimension | str, open_enum_validator(Dimension)]
