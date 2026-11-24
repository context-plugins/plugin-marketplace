from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error(SdkBaseModel):
    success: Literal["False"] = "False"
    message: str


class ErrorDict(TypedDict):
    success: Literal["False"]
    message: str
