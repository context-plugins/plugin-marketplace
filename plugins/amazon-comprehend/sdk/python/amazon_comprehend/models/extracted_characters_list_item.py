from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExtractedCharactersListItem(SdkBaseModel):
    page: Optional[int] = Field(default=UNSET, alias="Page")
    """Page number."""

    count: Optional[int] = Field(default=UNSET, alias="Count")
    """Number of characters extracted from each page."""


class ExtractedCharactersListItemDict(TypedDict):
    page: NotRequired[int]
    count: NotRequired[int]
