from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Metric(str, Enum):
    """``visits`` = sessions. ``visit_duration`` in seconds. ``bounce_rate`` is a 0–100 percentage. ``views_per_visit``
    = pageviews/visits (2 decimals). ``engagement_time`` = avg active-engagement seconds (aggregate + time-series,
    distinct from visit_duration). ``events`` = raw event count (breakdowns event:name/props/goal). ``conversion_rate``
    = converters percent (event:goal). ``time_on_page``/``scroll_depth`` = avg seconds / avg max scroll% 0-100
    (event:page, event:folder). ``exit_rate`` = exits percent of pageviews (visit:exit_page). The last five are
    breakdown-only: off their dimension, and on an aggregate or a time series, they return ``metric_not_available``
    naming the shape and the dimensions that do compute them. ``unknown_metric`` means the name itself is not a metric
    we compute."""

    VISITORS = "visitors"
    PAGEVIEWS = "pageviews"
    VISITS = "visits"
    VISIT_DURATION = "visit_duration"
    BOUNCE_RATE = "bounce_rate"
    VIEWS_PER_VISIT = "views_per_visit"
    ENGAGEMENT_TIME = "engagement_time"
    EVENTS = "events"
    CONVERSION_RATE = "conversion_rate"
    TIME_ON_PAGE = "time_on_page"
    SCROLL_DEPTH = "scroll_depth"
    EXIT_RATE = "exit_rate"

    __str__ = str.__str__


MetricOrStr: TypeAlias = Annotated[Metric | str, open_enum_validator(Metric)]
