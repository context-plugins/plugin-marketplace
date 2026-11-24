from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .part_of_speech_tag import PartOfSpeechTag, PartOfSpeechTagDict


class SyntaxToken(SdkBaseModel):
    token_id: Optional[int] = Field(default=UNSET, alias="TokenId")
    """A unique identifier for a token."""

    text: Optional[str] = Field(default=UNSET, alias="Text")
    """The word that was recognized in the source text."""

    begin_offset: Optional[int] = Field(default=UNSET, alias="BeginOffset")
    """The zero-based offset from the beginning of the source text to the first character in the word."""

    end_offset: Optional[int] = Field(default=UNSET, alias="EndOffset")
    """The zero-based offset from the beginning of the source text to the last character in the word."""

    part_of_speech: Optional[PartOfSpeechTag] = Field(default=UNSET, alias="PartOfSpeech")


class SyntaxTokenDict(TypedDict):
    token_id: NotRequired[int]
    text: NotRequired[str]
    begin_offset: NotRequired[int]
    end_offset: NotRequired[int]
    part_of_speech: NotRequired[PartOfSpeechTagDict]
