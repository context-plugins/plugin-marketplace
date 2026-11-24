from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result1 import Result1, Result1Dict


class Step2(SdkBaseModel):
    title: Optional[str] = UNSET
    status: Optional[str] = UNSET
    result: Optional[Result1] = UNSET


class Step2Dict(TypedDict):
    title: NotRequired[str]
    status: NotRequired[str]
    result: NotRequired[Result1Dict]
