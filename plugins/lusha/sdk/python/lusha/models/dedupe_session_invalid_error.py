from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DedupeSessionInvalidError(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    code: str
    message: str


class DedupeSessionInvalidErrorDict(TypedDict):
    code: str
    message: str
