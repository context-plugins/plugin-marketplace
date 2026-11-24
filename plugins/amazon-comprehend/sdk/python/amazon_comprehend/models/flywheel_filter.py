from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status10 import Status10OrStr


class FlywheelFilter(SdkBaseModel):
    status: Optional[Status10OrStr] = Field(default=UNSET, alias="Status")
    """Filter the flywheels based on the flywheel status."""

    creation_time_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeAfter")
    """Filter the flywheels to include flywheels created after the specified time."""

    creation_time_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeBefore")
    """Filter the flywheels to include flywheels created before the specified time."""


class FlywheelFilterDict(TypedDict):
    status: NotRequired[Status10OrStr]
    creation_time_after: NotRequired[RFC3339DateTime]
    creation_time_before: NotRequired[RFC3339DateTime]
