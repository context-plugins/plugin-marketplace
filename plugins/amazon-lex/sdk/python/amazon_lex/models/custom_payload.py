from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomPayload(SdkBaseModel):
    value: str
    """The string that is sent to your application."""


class CustomPayloadDict(TypedDict):
    value: str
