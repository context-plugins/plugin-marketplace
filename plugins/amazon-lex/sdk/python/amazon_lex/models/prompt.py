from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .models_lex_message import ModelsLexMessage, ModelsLexMessageDict


class Prompt(SdkBaseModel):
    messages: list[ModelsLexMessage]
    """An array of objects, each of which provides a message string and its type. You can specify the message string in
    plain text or in Speech Synthesis Markup Language (SSML)."""

    max_attempts: int = Field(alias="maxAttempts")
    """The number of times to prompt the user for information."""

    response_card: Optional[str] = Field(default=UNSET, alias="responseCard")
    """A response card. Amazon Lex uses this prompt at runtime, in the PostText API response. It substitutes session
    attributes and slot values for placeholders in the response card. For more information, see ex-resp-card."""


class PromptDict(TypedDict):
    messages: list[ModelsLexMessageDict]
    max_attempts: int
    response_card: NotRequired[str]
