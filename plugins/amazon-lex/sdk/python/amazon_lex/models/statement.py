from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .models_lex_message import ModelsLexMessage, ModelsLexMessageDict


class Statement(SdkBaseModel):
    messages: list[ModelsLexMessage]
    """A collection of message objects."""

    response_card: Optional[str] = Field(default=UNSET, alias="responseCard")
    """At runtime, if the client is using the PostText API, Amazon Lex includes the response card in the response. It
    substitutes all of the session attributes and slot values for placeholders in the response card."""


class StatementDict(TypedDict):
    messages: list[ModelsLexMessageDict]
    response_card: NotRequired[str]
