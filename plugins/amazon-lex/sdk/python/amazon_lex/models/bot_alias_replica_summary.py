from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_alias_replication_status import BotAliasReplicationStatusOrStr


class BotAliasReplicaSummary(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The bot alias ID for all the alias bot replications."""

    bot_alias_replication_status: Optional[BotAliasReplicationStatusOrStr] = Field(
        default=UNSET, alias="botAliasReplicationStatus"
    )
    """The replication statuses for all the alias bot replications."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The bot version for all the alias bot replications."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation time and date for all the alias bot replications."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The last time and date updated for all the alias bot replications."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """The reasons for failure for the aliases bot replications."""


class BotAliasReplicaSummaryDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_alias_replication_status: NotRequired[BotAliasReplicationStatusOrStr]
    bot_version: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    failure_reasons: NotRequired[list[str]]
