from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexDeleteUtterancesRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the bot that stored the utterances."""

    user_id: str = Field(alias="userId")
    """The unique identifier for the user that made the utterances. This is the user ID that was sent in the PostContent
    or PostText operation request that contained the utterance."""


class ModelsLexDeleteUtterancesRequestDict(TypedDict):
    bot_name: str
    user_id: str
