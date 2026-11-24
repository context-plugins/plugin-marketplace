from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1EditsAcceptResponse1(SdkBaseModel):
    message: Optional[str] = UNSET
    result: Optional[str] = UNSET


class ApiV1EditsAcceptResponse1Dict(TypedDict):
    message: NotRequired[str]
    result: NotRequired[str]
