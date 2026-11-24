from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorError(SdkBaseModel):
    success: Literal["False"] = "False"
    message: str


class ErrorErrorDict(TypedDict):
    success: Literal["False"]
    message: str
