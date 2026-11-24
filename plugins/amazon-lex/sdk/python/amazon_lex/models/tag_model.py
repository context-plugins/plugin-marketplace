from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagModel(SdkBaseModel):
    key: str
    """The key for the tag. Keys are not case-sensitive and must be unique."""

    value: str
    """The value associated with a key. The value may be an empty string but it can't be null."""


class TagModelDict(TypedDict):
    key: str
    value: str
