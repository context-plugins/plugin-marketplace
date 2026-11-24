from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_member import BotMember, BotMemberDict
from .data_privacy import DataPrivacy, DataPrivacyDict
from .enums.bot_type1 import BotType1OrStr
from .error_log_settings import ErrorLogSettings, ErrorLogSettingsDict


class CreateBotRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the bot. The bot name must be unique in the account that creates the bot."""

    description: Optional[str] = UNSET
    """A description of the bot. It appears in lists to help you identify a particular bot."""

    role_arn: str = Field(alias="roleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot."""

    data_privacy: DataPrivacy = Field(alias="dataPrivacy")
    idle_session_ttl_in_seconds: int = Field(alias="idleSessionTTLInSeconds")
    """The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. A user
    interaction remains active for the amount of time specified. If no conversation occurs during this time, the session
    expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and
    86,400 (24 hours) seconds."""

    bot_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="botTags")
    """A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the UpdateBot
    operation to update tags. To update tags, use the TagResource operation."""

    test_bot_alias_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="testBotAliasTags")
    """A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the
    UpdateAlias operation to update tags. To update tags on the test alias, use the TagResource operation."""

    bot_type: Optional[BotType1OrStr] = Field(default=UNSET, alias="botType")
    """The type of a bot to create."""

    bot_members: Optional[list[BotMember]] = Field(default=UNSET, alias="botMembers")
    """The list of bot members in a network to be created."""

    error_log_settings: Optional[ErrorLogSettings] = Field(default=UNSET, alias="errorLogSettings")


class CreateBotRequestDict(TypedDict):
    bot_name: str
    description: NotRequired[str]
    role_arn: str
    data_privacy: DataPrivacyDict
    idle_session_ttl_in_seconds: int
    bot_tags: NotRequired[dict[str, str]]
    test_bot_alias_tags: NotRequired[dict[str, str]]
    bot_type: NotRequired[BotType1OrStr]
    bot_members: NotRequired[list[BotMemberDict]]
    error_log_settings: NotRequired[ErrorLogSettingsDict]
