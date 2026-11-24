from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomVocabularyItem(SdkBaseModel):
    item_id: str = Field(alias="itemId")
    """The unique item identifer for the custom vocabulary item from the custom vocabulary list."""

    phrase: str
    """The unique phrase for the custom vocabulary item from the custom vocabulary list."""

    weight: Optional[int] = UNSET
    """The weight assigned for the custom vocabulary item from the custom vocabulary list."""

    display_as: Optional[str] = Field(default=UNSET, alias="displayAs")
    """The DisplayAs value for the custom vocabulary item from the custom vocabulary list."""


class CustomVocabularyItemDict(TypedDict):
    item_id: str
    phrase: str
    weight: NotRequired[int]
    display_as: NotRequired[str]
