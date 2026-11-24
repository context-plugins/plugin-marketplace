from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error1(SdkBaseModel):
    code: str
    message: str
    details: list[Any]


class Error1Dict(TypedDict):
    code: str
    message: str
    details: list[Any]
