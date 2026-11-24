from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KeyPhrase(SdkBaseModel):
    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The level of confidence that Amazon Comprehend has in the accuracy of the detection."""

    text: Optional[str] = Field(default=UNSET, alias="Text")
    """The text of a key noun phrase."""

    begin_offset: Optional[int] = Field(default=UNSET, alias="BeginOffset")
    """The zero-based offset from the beginning of the source text to the first character in the key phrase."""

    end_offset: Optional[int] = Field(default=UNSET, alias="EndOffset")
    """The zero-based offset from the beginning of the source text to the last character in the key phrase."""


class KeyPhraseDict(TypedDict):
    score: NotRequired[float]
    text: NotRequired[str]
    begin_offset: NotRequired[int]
    end_offset: NotRequired[int]
