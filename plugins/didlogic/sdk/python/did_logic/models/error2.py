from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .detail import Detail, DetailDict


class Error2(SdkBaseModel):
    code: str
    message: str
    details: list[Detail]


class Error2Dict(TypedDict):
    code: str
    message: str
    details: list[DetailDict]
