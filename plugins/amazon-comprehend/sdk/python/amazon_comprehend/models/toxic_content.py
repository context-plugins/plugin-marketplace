from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name1 import Name1OrStr


class ToxicContent(SdkBaseModel):
    name: Optional[Name1OrStr] = Field(default=UNSET, alias="Name")
    """The name of the toxic content type."""

    score: Optional[float] = Field(default=UNSET, alias="Score")
    """Model confidence in the detected content type. Value range is zero to one, where one is highest confidence."""


class ToxicContentDict(TypedDict):
    name: NotRequired[Name1OrStr]
    score: NotRequired[float]
