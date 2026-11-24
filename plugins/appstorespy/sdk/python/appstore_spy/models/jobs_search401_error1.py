from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class JobsSearch401Error1(SdkBaseModel):
    message: str
    code: int


class JobsSearch401Error1Dict(TypedDict):
    message: str
    code: int
