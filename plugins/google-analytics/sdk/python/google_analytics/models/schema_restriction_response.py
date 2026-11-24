from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .active_metric_restriction import ActiveMetricRestriction, ActiveMetricRestrictionDict


class SchemaRestrictionResponse(SdkBaseModel):
    """The schema restrictions actively enforced in creating this report. To learn more, see `Access and
    data-restriction management <https://support.google.com/analytics/answer/10851388>`__."""

    active_metric_restrictions: Optional[list[ActiveMetricRestriction]] = Field(
        default=UNSET, alias="activeMetricRestrictions"
    )
    """All restrictions actively enforced in creating the report. For example, ``purchaseRevenue`` always has the
    restriction type ``REVENUE_DATA``. However, this active response restriction is only populated if the user's custom
    role disallows access to ``REVENUE_DATA``."""


class SchemaRestrictionResponseDict(TypedDict):
    active_metric_restrictions: NotRequired[list[ActiveMetricRestrictionDict]]
