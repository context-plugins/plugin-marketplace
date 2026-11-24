from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StopInstancesResponse(SdkBaseModel):
    stopped: int
    errors: Optional[list[str]] = UNSET


class StopInstancesResponseDict(TypedDict):
    stopped: int
    errors: NotRequired[list[str]]
