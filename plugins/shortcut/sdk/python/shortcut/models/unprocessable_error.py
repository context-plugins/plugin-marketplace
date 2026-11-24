from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnprocessableError(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    message: str


class UnprocessableErrorDict(TypedDict):
    message: str
