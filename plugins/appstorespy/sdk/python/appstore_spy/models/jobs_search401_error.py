from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class JobsSearch401Error(SdkBaseModel):
    message: str
    code: int


class JobsSearch401ErrorDict(TypedDict):
    message: str
    code: int
