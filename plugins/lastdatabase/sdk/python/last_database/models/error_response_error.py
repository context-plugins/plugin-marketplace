from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    status: Literal["False"] = "False"
    message: str


class ErrorResponseErrorDict(TypedDict):
    status: Literal["False"]
    message: str
