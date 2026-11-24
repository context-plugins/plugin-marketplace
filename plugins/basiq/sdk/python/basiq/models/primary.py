from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Primary(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str
    description: str


class PrimaryDict(TypedDict):
    title: str
    description: str
