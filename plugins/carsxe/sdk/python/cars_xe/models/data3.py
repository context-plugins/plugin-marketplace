from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result import Result, ResultDict


class Data3(SdkBaseModel):
    job: Optional[Any] = UNSET
    results: Optional[list[Result]] = UNSET


class Data3Dict(TypedDict):
    job: NotRequired[Any]
    results: NotRequired[list[ResultDict]]
