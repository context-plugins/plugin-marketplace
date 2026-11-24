from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_member import BotMember, BotMemberDict
from .data_privacy import DataPrivacy, DataPrivacyDict
from .enums.bot_status2 import BotStatus2OrStr
from .enums.bot_type6 import BotType6OrStr
from .error_log_settings import ErrorLogSettings, ErrorLogSettingsDict


class UpdateBotResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot that was updated."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot after the update."""

    description: Optional[str] = UNSET
    """The description of the bot after the update."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of the IAM role used by the bot after the update."""

    data_privacy: Optional[DataPrivacy] = Field(default=UNSET, alias="dataPrivacy")
    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The session timeout, in seconds, for the bot after the update."""

    bot_status: Optional[BotStatus2OrStr] = Field(default=UNSET, alias="botStatus")
    """Shows the current status of the bot. The bot is first in the Creating status. Once the bot is read for use, it
    changes to the Available status. After the bot is created, you can use the DRAFT version of the bot."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the bot was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the bot was last updated."""

    bot_type: Optional[BotType6OrStr] = Field(default=UNSET, alias="botType")
    """The type of the bot that was updated."""

    bot_members: Optional[list[BotMember]] = Field(default=UNSET, alias="botMembers")
    """The list of bot members in the network that was updated."""

    error_log_settings: Optional[ErrorLogSettings] = Field(default=UNSET, alias="errorLogSettings")


class UpdateBotResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_name: NotRequired[str]
    description: NotRequired[str]
    role_arn: NotRequired[str]
    data_privacy: NotRequired[DataPrivacyDict]
    idle_session_ttl_in_seconds: NotRequired[int]
    bot_status: NotRequired[BotStatus2OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    bot_type: NotRequired[BotType6OrStr]
    bot_members: NotRequired[list[BotMemberDict]]
    error_log_settings: NotRequired[ErrorLogSettingsDict]
