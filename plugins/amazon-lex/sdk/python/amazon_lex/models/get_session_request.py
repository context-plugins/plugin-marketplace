from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetSessionRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that contains the session data."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The alias identifier in use for the bot that contains the session data."""

    locale_id: str = Field(alias="localeId")
    """The locale where the session is in use."""

    session_id: str = Field(alias="sessionId")
    """The identifier of the session to return."""


class GetSessionRequestDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
    session_id: str
