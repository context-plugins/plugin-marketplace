from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class SignalMonitoringPlanDataSchemaProperty(SdkBaseModel):
    """Structured event field definitions keyed by output field name."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    description: OptionalNullable[str] = UNSET
    """Plain-language instructions describing the value to extract for this field."""

    nullable: OptionalNullable[bool] = UNSET
    """Whether the extracted value may be null. Defaults to true."""

    required: OptionalNullable[bool] = UNSET
    """Whether the field must appear in extracted event data. Defaults to true."""


class SignalMonitoringPlanDataSchemaPropertyDict(TypedDict):
    type_: NotRequired[str]
    description: NotRequired[str | None]
    nullable: NotRequired[bool | None]
    required: NotRequired[bool | None]
