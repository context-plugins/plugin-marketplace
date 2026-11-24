from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2HlrRequest(SdkBaseModel):
    numbers: Optional[list[str]] = UNSET
    """Array of phone numbers in E.164 format (e.g. +14155552671)"""


class ApiV2HlrRequestDict(TypedDict):
    numbers: NotRequired[list[str]]
