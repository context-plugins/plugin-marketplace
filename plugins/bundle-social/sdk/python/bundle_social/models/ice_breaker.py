from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IceBreaker(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    question: str
    payload: str


class IceBreakerDict(TypedDict):
    question: str
    payload: str
