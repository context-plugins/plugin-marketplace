from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1EditsAccept400Error(SdkBaseModel):
    msg: Optional[str] = UNSET
    """Human-readable error message."""

    message: Optional[str] = UNSET
    result: Optional[str] = UNSET


class ApiV1EditsAccept400ErrorDict(TypedDict):
    msg: NotRequired[str]
    message: NotRequired[str]
    result: NotRequired[str]
