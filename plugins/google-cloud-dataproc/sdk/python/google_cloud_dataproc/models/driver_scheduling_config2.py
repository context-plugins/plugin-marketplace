from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DriverSchedulingConfig2(SdkBaseModel):
    """Optional. Driver scheduling configuration."""

    memory_mb: Optional[int] = Field(default=UNSET, alias="memoryMb")
    """Required. The amount of memory in MB the driver is requesting."""

    vcores: Optional[int] = UNSET
    """Required. The number of vCPUs the driver is requesting."""


class DriverSchedulingConfig2Dict(TypedDict):
    memory_mb: NotRequired[int]
    vcores: NotRequired[int]
