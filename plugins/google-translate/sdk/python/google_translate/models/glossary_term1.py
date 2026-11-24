from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GlossaryTerm1(SdkBaseModel):
    """The source term is the term that will get match in the text,"""

    text: Optional[str] = UNSET
    """The text for the glossary term."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """The language for this glossary term."""


class GlossaryTerm1Dict(TypedDict):
    text: NotRequired[str]
    language_code: NotRequired[str]
