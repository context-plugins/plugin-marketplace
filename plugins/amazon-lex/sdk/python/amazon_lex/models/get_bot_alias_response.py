from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .conversation_logs_response import ConversationLogsResponse, ConversationLogsResponseDict


class GetBotAliasResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the bot alias."""

    description: Optional[str] = UNSET
    """A description of the bot alias."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that the alias points to."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot that the alias points to."""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """The date that the bot alias was updated. When you create a resource, the creation date and the last updated date
    are the same."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date that the bot alias was created."""

    checksum: Optional[str] = UNSET
    """Checksum of the bot alias."""

    conversation_logs: Optional[ConversationLogsResponse] = Field(default=UNSET, alias="conversationLogs")


class GetBotAliasResponseDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_name: NotRequired[str]
    last_updated_date: NotRequired[RFC3339DateTime]
    created_date: NotRequired[RFC3339DateTime]
    checksum: NotRequired[str]
    conversation_logs: NotRequired[ConversationLogsResponseDict]
