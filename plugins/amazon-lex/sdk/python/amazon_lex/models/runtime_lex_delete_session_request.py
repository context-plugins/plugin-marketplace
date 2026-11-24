from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeLexDeleteSessionRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the bot that contains the session data."""

    bot_alias: str = Field(alias="botAlias")
    """The alias in use for the bot that contains the session data."""

    user_id: str = Field(alias="userId")
    """The identifier of the user associated with the session data."""


class RuntimeLexDeleteSessionRequestDict(TypedDict):
    bot_name: str
    bot_alias: str
    user_id: str
