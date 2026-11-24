from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1CompleteAcceptResponse1(SdkBaseModel):
    message: Optional[str] = UNSET
    result: Optional[str] = UNSET


class ApiV1CompleteAcceptResponse1Dict(TypedDict):
    message: NotRequired[str]
    result: NotRequired[str]
