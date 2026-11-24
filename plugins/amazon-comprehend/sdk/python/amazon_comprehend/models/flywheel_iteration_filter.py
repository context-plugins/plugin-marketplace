from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class FlywheelIterationFilter(SdkBaseModel):
    creation_time_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeAfter")
    """Filter the flywheel iterations to include iterations created after the specified time."""

    creation_time_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeBefore")
    """Filter the flywheel iterations to include iterations created before the specified time."""


class FlywheelIterationFilterDict(TypedDict):
    creation_time_after: NotRequired[RFC3339DateTime]
    creation_time_before: NotRequired[RFC3339DateTime]
