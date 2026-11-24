from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SuccessModel(SdkBaseModel):
    success: Literal["True"] = "True"
    message: Optional[str] = UNSET


class SuccessModelDict(TypedDict):
    success: Literal["True"]
    message: NotRequired[str]
