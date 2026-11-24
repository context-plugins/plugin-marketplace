from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.result import Result, ResultDict


class MemoryRetrieveResponse(SdkBaseModel):
    results: list[Result]


class MemoryRetrieveResponseDict(TypedDict):
    results: list[ResultDict]
