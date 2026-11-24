from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_version_replication_status import BotVersionReplicationStatusOrStr


class BotVersionReplicaSummary(SdkBaseModel):
    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The bot version for the summary information for all the version replication statuses."""

    bot_version_replication_status: Optional[BotVersionReplicationStatusOrStr] = Field(
        default=UNSET, alias="botVersionReplicationStatus"
    )
    """The version replication status for all the replicated bots."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time of the replication status for all the replicated bots."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """The reasons for replication failure for all the replicated bots."""


class BotVersionReplicaSummaryDict(TypedDict):
    bot_version: NotRequired[str]
    bot_version_replication_status: NotRequired[BotVersionReplicationStatusOrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    failure_reasons: NotRequired[list[str]]
