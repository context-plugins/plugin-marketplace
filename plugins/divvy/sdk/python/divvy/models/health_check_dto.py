from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HealthCheckDto(SdkBaseModel):
    """App health response."""

    status: Optional[str] = UNSET
    """Health status"""


class HealthCheckDtoDict(TypedDict):
    status: NotRequired[str]
