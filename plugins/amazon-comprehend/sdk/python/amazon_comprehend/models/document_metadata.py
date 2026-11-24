from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extracted_characters_list_item import ExtractedCharactersListItem, ExtractedCharactersListItemDict


class DocumentMetadata(SdkBaseModel):
    pages: Optional[int] = Field(default=UNSET, alias="Pages")
    """Number of pages in the document."""

    extracted_characters: Optional[list[ExtractedCharactersListItem]] = Field(
        default=UNSET, alias="ExtractedCharacters"
    )
    """List of pages in the document, with the number of characters extracted from each page."""


class DocumentMetadataDict(TypedDict):
    pages: NotRequired[int]
    extracted_characters: NotRequired[list[ExtractedCharactersListItemDict]]
