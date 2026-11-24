from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetSlotTypeRequest(SdkBaseModel):
    name: str
    """The name of the slot type. The name is case sensitive."""

    version: str
    """The version of the slot type."""


class GetSlotTypeRequestDict(TypedDict):
    name: str
    version: str
