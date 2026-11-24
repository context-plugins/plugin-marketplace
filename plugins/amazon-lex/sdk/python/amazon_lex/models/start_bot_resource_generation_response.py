from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.generation_status import GenerationStatusOrStr


class StartBotResourceGenerationResponse(SdkBaseModel):
    generation_input_prompt: Optional[str] = Field(default=UNSET, alias="generationInputPrompt")
    """The prompt that was used generate intents and slot types for the bot locale."""

    generation_id: Optional[str] = Field(default=UNSET, alias="generationId")
    """The unique identifier of the generation request."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot for which the generation request was made."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot for which the generation request was made."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale of the bot for which the generation request was made."""

    generation_status: Optional[GenerationStatusOrStr] = Field(default=UNSET, alias="generationStatus")
    """The status of the generation request."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time at which the generation request was made."""


class StartBotResourceGenerationResponseDict(TypedDict):
    generation_input_prompt: NotRequired[str]
    generation_id: NotRequired[str]
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    generation_status: NotRequired[GenerationStatusOrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
