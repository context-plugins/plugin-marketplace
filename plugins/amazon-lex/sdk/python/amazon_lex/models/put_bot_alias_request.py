from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conversation_logs_request import ConversationLogsRequest, ConversationLogsRequestDict
from .tag_model import TagModel, TagModelDict


class PutBotAliasRequest(SdkBaseModel):
    name: str
    """The name of the alias. The name is not case sensitive."""

    description: Optional[str] = UNSET
    """A description of the alias."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot."""

    bot_name: str = Field(alias="botName")
    """The name of the bot."""

    checksum: Optional[str] = UNSET
    """Identifies a specific revision of the $LATEST version. When you create a new bot alias, leave the checksum field
    blank. If you specify a checksum you get a BadRequestException exception. When you want to update a bot alias, set
    the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the
    checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException
    exception."""

    conversation_logs: Optional[ConversationLogsRequest] = Field(default=UNSET, alias="conversationLogs")
    tags: Optional[list[TagModel]] = UNSET
    """A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the
    PutBotAlias operation to update the tags on a bot alias. To update tags, use the TagResource operation."""


class PutBotAliasRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    bot_version: str
    bot_name: str
    checksum: NotRequired[str]
    conversation_logs: NotRequired[ConversationLogsRequestDict]
    tags: NotRequired[list[TagModelDict]]
