from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UriValue1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    uri: str


class UriValue1Dict(TypedDict):
    uri: str
