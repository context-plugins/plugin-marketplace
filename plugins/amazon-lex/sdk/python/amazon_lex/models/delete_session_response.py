from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteSessionResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contained the session data."""

    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The alias identifier in use for the bot that contained the session data."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale where the session was used."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the deleted session."""


class DeleteSessionResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_alias_id: NotRequired[str]
    locale_id: NotRequired[str]
    session_id: NotRequired[str]
