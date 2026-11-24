from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_member import BotMember, BotMemberDict
from .data_privacy import DataPrivacy, DataPrivacyDict
from .enums.bot_status2 import BotStatus2OrStr
from .enums.bot_type2 import BotType2OrStr
from .error_log_settings import ErrorLogSettings, ErrorLogSettingsDict


class CreateBotResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """A unique identifier for a particular bot. You use this to identify the bot when you call other Amazon Lex API
    operations."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name specified for the bot."""

    description: Optional[str] = UNSET
    """The description specified for the bot."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The IAM role specified for the bot."""

    data_privacy: Optional[DataPrivacy] = Field(default=UNSET, alias="dataPrivacy")
    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The session idle time specified for the bot."""

    bot_status: Optional[BotStatus2OrStr] = Field(default=UNSET, alias="botStatus")
    """Shows the current status of the bot. The bot is first in the Creating status. Once the bot is read for use, it
    changes to the Available status. After the bot is created, you can use the DRAFT version of the bot."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp indicating the date and time that the bot was created."""

    bot_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="botTags")
    """A list of tags associated with the bot."""

    test_bot_alias_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="testBotAliasTags")
    """A list of tags associated with the test alias for the bot."""

    bot_type: Optional[BotType2OrStr] = Field(default=UNSET, alias="botType")
    """The type of a bot that was created."""

    bot_members: Optional[list[BotMember]] = Field(default=UNSET, alias="botMembers")
    """The list of bots in a network that was created."""

    error_log_settings: Optional[ErrorLogSettings] = Field(default=UNSET, alias="errorLogSettings")


class CreateBotResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_name: NotRequired[str]
    description: NotRequired[str]
    role_arn: NotRequired[str]
    data_privacy: NotRequired[DataPrivacyDict]
    idle_session_ttl_in_seconds: NotRequired[int]
    bot_status: NotRequired[BotStatus2OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    bot_tags: NotRequired[dict[str, str]]
    test_bot_alias_tags: NotRequired[dict[str, str]]
    bot_type: NotRequired[BotType2OrStr]
    bot_members: NotRequired[list[BotMemberDict]]
    error_log_settings: NotRequired[ErrorLogSettingsDict]
