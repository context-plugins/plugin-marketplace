from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.change_type import ChangeTypeOrStr
from .enums.operator1 import Operator1OrStr
from .external_metric import ExternalMetric, ExternalMetricDict


class ExternalLimitByChange(SdkBaseModel):
    """Limit by change filter; a report may configure at most two of ``metricFilter``, ``limitByChange`` and rank
    ``group`` limits. Without ``secondaryTimeRange`` the change is a period-over-period delta between adjacent time
    buckets. With it, each row's primary-range total is compared with its secondary-range total, so column dimensions
    (``dimensions``, which ``timeInterval`` fills implicitly when omitted) only add buckets to those totals, while
    ``group`` gives every row its own change. A percentage change is comparable while both periods hold the same number
    of buckets; an absolute change is their plain difference and so scales with the bucket count. A row present in only
    one range counts as zero there, so a percentage threshold cannot be met from zero. A percentage-typed custom metric,
    or count aggregation, is rejected with ``LIMIT_BY_CHANGE_METRIC_NOT_ADDITIVE_WITH_SECONDARY``. On PATCH, omit to
    preserve the existing limit; send null to remove it."""

    metric: ExternalMetric
    """The metric the change is measured on. It must also be listed in the report's ``config.metrics``; otherwise the
    request is rejected with a 400 and nothing is saved."""

    change_type: ChangeTypeOrStr = Field(alias="changeType")
    operator: Operator1OrStr
    """Comparison operator for period-over-period deltas: ``gt`` (Greater Than), ``gte`` (Greater Than or Equals),
    ``lt`` (Less Than), ``lte`` (Less Than or Equals), ``b`` (Between), ``nb`` (Not Between)."""

    values: list[float]
    """Threshold value(s). Unary operators (``gt``, ``gte``, ``lt``, ``lte``) use one entry; the range operators (``b``,
    ``nb``) require two ordered entries."""

    include_incomplete_data: bool = Field(alias="includeIncompleteData")
    """When true, keeps rows whose deltas could not be evaluated."""


class ExternalLimitByChangeDict(TypedDict):
    metric: ExternalMetricDict
    change_type: ChangeTypeOrStr
    operator: Operator1OrStr
    values: list[float]
    include_incomplete_data: bool
