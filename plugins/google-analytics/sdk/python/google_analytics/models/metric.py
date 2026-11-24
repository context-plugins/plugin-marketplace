from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Metric(SdkBaseModel):
    """The quantitative measurements of a report. For example, the metric ``eventCount`` is the total number of events.
    Requests are allowed up to 10 metrics."""

    invisible: Optional[bool] = UNSET
    """Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce
    a column in the response, but can be used in ``metricFilter``, ``orderBys``, or a metric ``expression``."""

    name: Optional[str] = UNSET
    """The name of the metric. See the `API Metrics
    <https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics>`__ for the list of metric
    names supported by core reporting methods such as ``runReport`` and ``batchRunReports``. See `Realtime Metrics
    <https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#metrics>`__ for the list of
    metric names supported by the ``runRealtimeReport`` method. See `Funnel Metrics
    <https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#metrics>`__ for the list
    of metric names supported by the ``runFunnelReport`` method. If ``expression`` is specified, ``name`` can be any
    string that you would like within the allowed character set. For example if ``expression`` is
    ``screenPageViews/sessions``, you could call that metric's name = ``viewsPerSession``. Metric names that you choose
    must match the regular expression ``^[a-zA-Z0-9_]$``. Metrics are referenced by ``name`` in ``metricFilter``,
    ``orderBys``, and metric ``expression``."""

    expression: Optional[str] = UNSET
    """A mathematical expression for derived metrics. For example, the metric Event count per user is
    ``eventCount/totalUsers``."""


class MetricDict(TypedDict):
    invisible: NotRequired[bool]
    name: NotRequired[str]
    expression: NotRequired[str]
