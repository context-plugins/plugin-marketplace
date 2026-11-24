from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_alias_status import BotAliasStatusOrStr


class BotAliasSummary(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The unique identifier assigned to the bot alias. You can use this ID to get detailed information about the alias
    using the DescribeBotAlias operation."""

    bot_alias_name: Optional[str] = Field(default=UNSET, alias="botAliasName")
    """The name of the bot alias."""

    description: Optional[str] = UNSET
    """The description of the bot alias."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that the bot alias references."""

    bot_alias_status: Optional[BotAliasStatusOrStr] = Field(default=UNSET, alias="botAliasStatus")
    """The current state of the bot alias. If the status is Available, the alias is ready for use."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the bot alias was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the bot alias was last updated."""


class BotAliasSummaryDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_alias_name: NotRequired[str]
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_alias_status: NotRequired[BotAliasStatusOrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
