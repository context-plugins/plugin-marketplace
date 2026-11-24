from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LanguageCodesSet(SdkBaseModel):
    """Used with equivalent term set glossaries."""

    language_codes: Optional[list[str]] = Field(default=UNSET, alias="languageCodes")
    """Optional. The ISO-639 language code(s) for terms defined in the glossary. All entries are unique. The list
    contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code."""


class LanguageCodesSetDict(TypedDict):
    language_codes: NotRequired[list[str]]
