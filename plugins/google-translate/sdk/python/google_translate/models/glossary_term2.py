from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GlossaryTerm2(SdkBaseModel):
    """The term that will replace the match source term."""

    text: Optional[str] = UNSET
    """The text for the glossary term."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """The language for this glossary term."""


class GlossaryTerm2Dict(TypedDict):
    text: NotRequired[str]
    language_code: NotRequired[str]
