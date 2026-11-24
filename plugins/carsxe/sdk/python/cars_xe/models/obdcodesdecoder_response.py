from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ObdcodesdecoderResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    diagnosis: Optional[str] = UNSET
    date: Optional[str] = UNSET
    code: Optional[str] = UNSET


class ObdcodesdecoderResponseDict(TypedDict):
    success: NotRequired[bool]
    diagnosis: NotRequired[str]
    date: NotRequired[str]
    code: NotRequired[str]
