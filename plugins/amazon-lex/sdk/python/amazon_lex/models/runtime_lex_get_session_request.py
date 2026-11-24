from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RuntimeLexGetSessionRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the bot that contains the session data."""

    bot_alias: str = Field(alias="botAlias")
    """The alias in use for the bot that contains the session data."""

    user_id: str = Field(alias="userId")
    """The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot."""

    checkpoint_label_filter: Optional[str] = Field(default=UNSET, alias="checkpointLabelFilter")
    """A string used to filter the intents returned in the recentIntentSummaryView structure. When you specify a filter,
    only intents with their checkpointLabel field set to that string are returned."""


class RuntimeLexGetSessionRequestDict(TypedDict):
    bot_name: str
    bot_alias: str
    user_id: str
    checkpoint_label_filter: NotRequired[str]
