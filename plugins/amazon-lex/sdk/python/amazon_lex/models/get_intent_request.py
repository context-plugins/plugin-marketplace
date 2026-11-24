from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetIntentRequest(SdkBaseModel):
    name: str
    """The name of the intent. The name is case sensitive."""

    version: str
    """The version of the intent."""


class GetIntentRequestDict(TypedDict):
    name: str
    version: str
