from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagModel(SdkBaseModel):
    key: str = Field(alias="Key")
    """One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more
    specific tag values."""

    value: str = Field(alias="Value")
    """The optional part of a key-value pair that makes up a tag. A value acts as a descriptor within a tag category
    (key)."""


class TagModelDict(TypedDict):
    key: str
    value: str
