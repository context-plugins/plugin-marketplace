from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort import SortOrStr
from .external_metric import ExternalMetric, ExternalMetricDict


class Limit(SdkBaseModel):
    """To limit the number of results based on ranking. See `Limit by rank
    <https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#limit-by-topbottom>`__."""

    metric: ExternalMetric
    """Metric selector used in reports and filters."""

    sort: Optional[SortOrStr] = UNSET
    """Sort order for ranking results."""

    value: Optional[int] = UNSET
    """The number of items to show"""


class LimitDict(TypedDict):
    metric: ExternalMetricDict
    sort: NotRequired[SortOrStr]
    value: NotRequired[int]
