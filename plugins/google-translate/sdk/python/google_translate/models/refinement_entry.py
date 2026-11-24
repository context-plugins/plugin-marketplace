from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RefinementEntry(SdkBaseModel):
    """A single refinement entry for RefineTextRequest."""

    source_text: Optional[str] = Field(default=UNSET, alias="sourceText")
    """Required. The source text to be refined."""

    original_translation: Optional[str] = Field(default=UNSET, alias="originalTranslation")
    """Required. The original translation of the source text."""


class RefinementEntryDict(TypedDict):
    source_text: NotRequired[str]
    original_translation: NotRequired[str]
