from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .result1 import Result1, Result1Dict


class Step1(SdkBaseModel):
    title: Optional[str] = UNSET
    status: Optional[str] = UNSET
    result: OptionalNullable[Result1] = UNSET


class Step1Dict(TypedDict):
    title: NotRequired[str]
    status: NotRequired[str]
    result: NotRequired[Result1Dict | None]
