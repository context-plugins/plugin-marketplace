from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.restricted_metric_type import RestrictedMetricTypeOrStr


class ActiveMetricRestriction(SdkBaseModel):
    """A metric actively restricted in creating the report."""

    restricted_metric_types: Optional[list[RestrictedMetricTypeOrStr]] = Field(
        default=UNSET, alias="restrictedMetricTypes"
    )
    """The reason for this metric's restriction."""

    metric_name: Optional[str] = Field(default=UNSET, alias="metricName")
    """The name of the restricted metric."""


class ActiveMetricRestrictionDict(TypedDict):
    restricted_metric_types: NotRequired[list[RestrictedMetricTypeOrStr]]
    metric_name: NotRequired[str]
