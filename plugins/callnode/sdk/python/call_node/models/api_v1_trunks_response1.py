from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1TrunksResponse1(SdkBaseModel):
    success: Optional[bool] = UNSET
    id: Optional[str] = UNSET


class ApiV1TrunksResponse1Dict(TypedDict):
    success: NotRequired[bool]
    id: NotRequired[str]
