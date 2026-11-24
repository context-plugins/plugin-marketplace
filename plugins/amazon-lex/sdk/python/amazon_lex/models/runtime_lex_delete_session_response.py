from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RuntimeLexDeleteSessionResponse(SdkBaseModel):
    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot associated with the session data."""

    bot_alias: Optional[str] = Field(default=UNSET, alias="botAlias")
    """The alias in use for the bot associated with the session data."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """The ID of the client application user."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The unique identifier for the session."""


class RuntimeLexDeleteSessionResponseDict(TypedDict):
    bot_name: NotRequired[str]
    bot_alias: NotRequired[str]
    user_id: NotRequired[str]
    session_id: NotRequired[str]
