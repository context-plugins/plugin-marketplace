from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error(SdkBaseModel):
    code: Literal["agents_stopped"] = "agents_stopped"
    message: str


class ErrorDict(TypedDict):
    code: Literal["agents_stopped"]
    message: str
