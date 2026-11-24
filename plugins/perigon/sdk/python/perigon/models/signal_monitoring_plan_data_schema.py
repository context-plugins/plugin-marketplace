from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .signal_monitoring_plan_data_schema_property import (
    SignalMonitoringPlanDataSchemaProperty,
    SignalMonitoringPlanDataSchemaPropertyDict,
)


class SignalMonitoringPlanDataSchema(SdkBaseModel):
    """Schema for the structured data extracted into each matching event."""

    version: Literal["V1"] = "V1"
    """Data schema version. Currently only V1 is supported."""

    allow_extra: OptionalNullable[bool] = Field(default=UNSET, alias="allowExtra")
    """Whether extracted event data may contain fields not defined in schema. Defaults to false."""

    schema_value: dict[str, SignalMonitoringPlanDataSchemaProperty] = Field(alias="schema")
    """Structured event field definitions keyed by output field name."""


class SignalMonitoringPlanDataSchemaDict(TypedDict):
    version: Literal["V1"]
    allow_extra: NotRequired[bool | None]
    schema_value: dict[str, SignalMonitoringPlanDataSchemaPropertyDict]
