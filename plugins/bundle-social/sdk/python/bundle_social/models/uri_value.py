from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UriValue(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    uri: str


class UriValueDict(TypedDict):
    uri: str
