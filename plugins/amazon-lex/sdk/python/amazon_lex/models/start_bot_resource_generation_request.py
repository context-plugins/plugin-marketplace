from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StartBotResourceGenerationRequest(SdkBaseModel):
    generation_input_prompt: str = Field(alias="generationInputPrompt")
    """The prompt to generate intents and slot types for the bot locale. Your description should be both detailed and
    precise to help generate appropriate and sufficient intents for your bot. Include a list of actions to improve the
    intent creation process."""

    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot for which to generate intents and slot types."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot for which to generate intents and slot types."""

    locale_id: str = Field(alias="localeId")
    """The locale of the bot for which to generate intents and slot types."""


class StartBotResourceGenerationRequestDict(TypedDict):
    generation_input_prompt: str
    bot_id: str
    bot_version: str
    locale_id: str
