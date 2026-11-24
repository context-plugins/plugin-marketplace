from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_info import ValueInfo, ValueInfoDict


class PropertiesInfo2(SdkBaseModel):
    """Optional. Properties of the workload organized by origin."""

    autotuning_properties: Optional[dict[str, ValueInfo]] = Field(default=UNSET, alias="autotuningProperties")
    """Output only. Properties set by autotuning engine."""


class PropertiesInfo2Dict(TypedDict):
    autotuning_properties: NotRequired[dict[str, ValueInfoDict]]
