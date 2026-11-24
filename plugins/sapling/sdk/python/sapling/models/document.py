from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Document(SdkBaseModel):
    characters: Optional[int] = UNSET
    """Characters of text extracted from the file."""

    characters_used: Optional[int] = UNSET
    """Characters read for extraction (and billed)."""

    file_type: Optional[str] = UNSET
    truncated: Optional[bool] = UNSET


class DocumentDict(TypedDict):
    characters: NotRequired[int]
    characters_used: NotRequired[int]
    file_type: NotRequired[str]
    truncated: NotRequired[bool]
