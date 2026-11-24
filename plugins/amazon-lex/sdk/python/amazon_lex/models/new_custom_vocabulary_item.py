from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NewCustomVocabularyItem(SdkBaseModel):
    phrase: str
    """The unique phrase for the new custom vocabulary item from the custom vocabulary list."""

    weight: Optional[int] = UNSET
    """The weight assigned to the new custom vocabulary item from the custom vocabulary list."""

    display_as: Optional[str] = Field(default=UNSET, alias="displayAs")
    """The display as value assigned to the new custom vocabulary item from the custom vocabulary list."""


class NewCustomVocabularyItemDict(TypedDict):
    phrase: str
    weight: NotRequired[int]
    display_as: NotRequired[str]
