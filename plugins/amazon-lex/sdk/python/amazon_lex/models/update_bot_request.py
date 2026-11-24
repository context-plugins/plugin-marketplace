from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_member import BotMember, BotMemberDict
from .data_privacy import DataPrivacy, DataPrivacyDict
from .enums.bot_type5 import BotType5OrStr
from .error_log_settings import ErrorLogSettings, ErrorLogSettingsDict


class UpdateBotRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot to update. This identifier is returned by the CreateBot operation."""

    bot_name: str = Field(alias="botName")
    """The new name of the bot. The name must be unique in the account that creates the bot."""

    description: Optional[str] = UNSET
    """A description of the bot."""

    role_arn: str = Field(alias="roleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot."""

    data_privacy: DataPrivacy = Field(alias="dataPrivacy")
    idle_session_ttl_in_seconds: int = Field(alias="idleSessionTTLInSeconds")
    """The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. A user
    interaction remains active for the amount of time specified. If no conversation occurs during this time, the session
    expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and
    86,400 (24 hours) seconds."""

    bot_type: Optional[BotType5OrStr] = Field(default=UNSET, alias="botType")
    """The type of the bot to be updated."""

    bot_members: Optional[list[BotMember]] = Field(default=UNSET, alias="botMembers")
    """The list of bot members in the network associated with the update action."""

    error_log_settings: Optional[ErrorLogSettings] = Field(default=UNSET, alias="errorLogSettings")


class UpdateBotRequestDict(TypedDict):
    bot_id: str
    bot_name: str
    description: NotRequired[str]
    role_arn: str
    data_privacy: DataPrivacyDict
    idle_session_ttl_in_seconds: int
    bot_type: NotRequired[BotType5OrStr]
    bot_members: NotRequired[list[BotMemberDict]]
    error_log_settings: NotRequired[ErrorLogSettingsDict]
