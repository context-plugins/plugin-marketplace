from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sample_utterance import SampleUtterance, SampleUtteranceDict


class GenerateBotElementResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique bot Id for the bot which received the response."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The unique bot version for the bot which received the response."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The unique locale Id for the bot which received the response."""

    intent_id: Optional[str] = Field(default=UNSET, alias="intentId")
    """The unique intent Id for the bot which received the response."""

    sample_utterances: Optional[list[SampleUtterance]] = Field(default=UNSET, alias="sampleUtterances")
    """The sample utterances for the bot which received the response."""


class GenerateBotElementResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    intent_id: NotRequired[str]
    sample_utterances: NotRequired[list[SampleUtteranceDict]]
