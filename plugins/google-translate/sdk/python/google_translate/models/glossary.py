from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary_input_config2 import GlossaryInputConfig2, GlossaryInputConfig2Dict
from .language_code_pair import LanguageCodePair, LanguageCodePairDict
from .language_codes_set import LanguageCodesSet, LanguageCodesSetDict


class Glossary(SdkBaseModel):
    """Represents a glossary built from user-provided data."""

    submit_time: Optional[str] = Field(default=UNSET, alias="submitTime")
    """Output only. When CreateGlossary was called."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. When the glossary creation was finished."""

    language_codes_set: Optional[LanguageCodesSet] = Field(default=UNSET, alias="languageCodesSet")
    """Used with equivalent term set glossaries."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. The display name of the glossary."""

    input_config: Optional[GlossaryInputConfig2] = Field(default=UNSET, alias="inputConfig")
    """Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints."""

    entry_count: Optional[int] = Field(default=UNSET, alias="entryCount")
    """Output only. The number of entries defined in the glossary."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the glossary. Glossary names have the form
    ``projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}``."""

    language_pair: Optional[LanguageCodePair] = Field(default=UNSET, alias="languagePair")
    """Used with unidirectional glossaries."""


class GlossaryDict(TypedDict):
    submit_time: NotRequired[str]
    end_time: NotRequired[str]
    language_codes_set: NotRequired[LanguageCodesSetDict]
    display_name: NotRequired[str]
    input_config: NotRequired[GlossaryInputConfig2Dict]
    entry_count: NotRequired[int]
    name: NotRequired[str]
    language_pair: NotRequired[LanguageCodePairDict]
