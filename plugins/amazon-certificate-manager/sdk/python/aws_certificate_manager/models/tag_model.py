from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagModel(SdkBaseModel):
    key: str = Field(alias="Key")
    """The key of the tag."""

    value: Optional[str] = Field(default=UNSET, alias="Value")
    """The value of the tag."""


class TagModelDict(TypedDict):
    key: str
    value: NotRequired[str]
