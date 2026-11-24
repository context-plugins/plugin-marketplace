from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteUtterancesRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the utterances."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale where the utterances were collected. The string must match one of the
    supported locales. For more information, see Supported languages."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The unique identifier of the session with the user. The ID is returned in the response from the RecognizeText and
    RecognizeUtterance operations."""


class DeleteUtterancesRequestDict(TypedDict):
    bot_id: str
    locale_id: NotRequired[str]
    session_id: NotRequired[str]
