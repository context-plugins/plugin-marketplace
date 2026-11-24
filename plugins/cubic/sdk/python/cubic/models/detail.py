from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Detail(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    path: str
    message: str


class DetailDict(TypedDict):
    path: str
    message: str
