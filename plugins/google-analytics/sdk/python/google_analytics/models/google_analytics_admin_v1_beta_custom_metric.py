from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.measurement_unit import MeasurementUnitOrStr
from .enums.restricted_metric_type import RestrictedMetricTypeOrStr
from .enums.scope import ScopeOrStr


class GoogleAnalyticsAdminV1BetaCustomMetric(SdkBaseModel):
    """A definition for a custom metric."""

    restricted_metric_type: Optional[list[RestrictedMetricTypeOrStr]] = Field(
        default=UNSET, alias="restrictedMetricType"
    )
    """Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement
    unit. Must be empty for metrics with a non-CURRENCY measurement unit."""

    name: Optional[str] = UNSET
    """Identifier. Resource name for this CustomMetric resource. Format:
    properties/{property}/customMetrics/{customMetric}"""

    description: Optional[str] = UNSET
    """Optional. Description for this custom dimension. Max length of 150 characters."""

    scope: Optional[ScopeOrStr] = UNSET
    """Required. Immutable. The scope of this custom metric."""

    measurement_unit: Optional[MeasurementUnitOrStr] = Field(default=UNSET, alias="measurementUnit")
    """Required. The type for the custom metric's value."""

    parameter_name: Optional[str] = Field(default=UNSET, alias="parameterName")
    """Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the
    event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of
    40 characters for event-scoped metrics."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters,
    alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain
    square brackets, but updates to this field will never permit square brackets."""


class GoogleAnalyticsAdminV1BetaCustomMetricDict(TypedDict):
    restricted_metric_type: NotRequired[list[RestrictedMetricTypeOrStr]]
    name: NotRequired[str]
    description: NotRequired[str]
    scope: NotRequired[ScopeOrStr]
    measurement_unit: NotRequired[MeasurementUnitOrStr]
    parameter_name: NotRequired[str]
    display_name: NotRequired[str]
