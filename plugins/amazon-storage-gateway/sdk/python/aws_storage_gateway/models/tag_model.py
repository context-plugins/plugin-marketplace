from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagModel(SdkBaseModel):
    key: str = Field(alias="Key")
    """Tag key. The key can't start with aws:."""

    value: str = Field(alias="Value")
    """Value of the tag key."""


class TagModelDict(TypedDict):
    key: str
    value: str
