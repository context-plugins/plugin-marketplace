from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_member import BotMember, BotMemberDict
from .data_privacy import DataPrivacy, DataPrivacyDict
from .enums.bot_status7 import BotStatus7OrStr
from .enums.bot_type4 import BotType4OrStr
from .parent_bot_network import ParentBotNetwork, ParentBotNetworkDict


class DescribeBotVersionResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the version."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot that contains the version."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that was described."""

    description: Optional[str] = UNSET
    """The description specified for the bot."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot version."""

    data_privacy: Optional[DataPrivacy] = Field(default=UNSET, alias="dataPrivacy")
    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The number of seconds that a session with the bot remains active before it is discarded by Amazon Lex."""

    bot_status: Optional[BotStatus7OrStr] = Field(default=UNSET, alias="botStatus")
    """The current status of the bot. When the status is Available, the bot version is ready for use."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """If the botStatus is Failed, this contains a list of reasons that the version couldn't be built."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the bot version was created."""

    parent_bot_networks: Optional[list[ParentBotNetwork]] = Field(default=UNSET, alias="parentBotNetworks")
    """A list of the networks to which the bot version you described belongs."""

    bot_type: Optional[BotType4OrStr] = Field(default=UNSET, alias="botType")
    """The type of the bot in the version that was described."""

    bot_members: Optional[list[BotMember]] = Field(default=UNSET, alias="botMembers")
    """The members of bot network in the version that was described."""


class DescribeBotVersionResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_name: NotRequired[str]
    bot_version: NotRequired[str]
    description: NotRequired[str]
    role_arn: NotRequired[str]
    data_privacy: NotRequired[DataPrivacyDict]
    idle_session_ttl_in_seconds: NotRequired[int]
    bot_status: NotRequired[BotStatus7OrStr]
    failure_reasons: NotRequired[list[str]]
    creation_date_time: NotRequired[RFC3339DateTime]
    parent_bot_networks: NotRequired[list[ParentBotNetworkDict]]
    bot_type: NotRequired[BotType4OrStr]
    bot_members: NotRequired[list[BotMemberDict]]
