from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_member import BotMember, BotMemberDict
from .data_privacy import DataPrivacy, DataPrivacyDict
from .enums.bot_status6 import BotStatus6OrStr
from .enums.bot_type3 import BotType3OrStr
from .error_log_settings import ErrorLogSettings, ErrorLogSettingsDict


class DescribeBotResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot."""

    description: Optional[str] = UNSET
    """The description of the bot."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot."""

    data_privacy: Optional[DataPrivacy] = Field(default=UNSET, alias="dataPrivacy")
    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The maximum time in seconds that Amazon Lex retains the data gathered in a conversation."""

    bot_status: Optional[BotStatus6OrStr] = Field(default=UNSET, alias="botStatus")
    """The current status of the bot. When the status is Available the bot is ready to be used in conversations with
    users."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the bot was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the bot was last updated."""

    bot_type: Optional[BotType3OrStr] = Field(default=UNSET, alias="botType")
    """The type of the bot that was described."""

    bot_members: Optional[list[BotMember]] = Field(default=UNSET, alias="botMembers")
    """The list of bots in the network that was described."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """If the botStatus is Failed, this contains a list of reasons that the bot couldn't be built."""

    error_log_settings: Optional[ErrorLogSettings] = Field(default=UNSET, alias="errorLogSettings")


class DescribeBotResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_name: NotRequired[str]
    description: NotRequired[str]
    role_arn: NotRequired[str]
    data_privacy: NotRequired[DataPrivacyDict]
    idle_session_ttl_in_seconds: NotRequired[int]
    bot_status: NotRequired[BotStatus6OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    bot_type: NotRequired[BotType3OrStr]
    bot_members: NotRequired[list[BotMemberDict]]
    failure_reasons: NotRequired[list[str]]
    error_log_settings: NotRequired[ErrorLogSettingsDict]
