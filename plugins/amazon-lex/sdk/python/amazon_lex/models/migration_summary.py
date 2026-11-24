from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.migration_status1 import MigrationStatus1OrStr
from .enums.migration_strategy1 import MigrationStrategy1OrStr
from .enums.v1_bot_locale1 import V1BotLocale1OrStr


class MigrationSummary(SdkBaseModel):
    migration_id: Optional[str] = Field(default=UNSET, alias="migrationId")
    """The unique identifier that Amazon Lex assigned to the migration."""

    v1_bot_name: Optional[str] = Field(default=UNSET, alias="v1BotName")
    """The name of the Amazon Lex V1 bot that is the source of the migration."""

    v1_bot_version: Optional[str] = Field(default=UNSET, alias="v1BotVersion")
    """The version of the Amazon Lex V1 bot that is the source of the migration."""

    v1_bot_locale: Optional[V1BotLocale1OrStr] = Field(default=UNSET, alias="v1BotLocale")
    """The locale of the Amazon Lex V1 bot that is the source of the migration."""

    v2_bot_id: Optional[str] = Field(default=UNSET, alias="v2BotId")
    """The unique identifier of the Amazon Lex V2 that is the destination of the migration."""

    v2_bot_role: Optional[str] = Field(default=UNSET, alias="v2BotRole")
    """The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot."""

    migration_status: Optional[MigrationStatus1OrStr] = Field(default=UNSET, alias="migrationStatus")
    """The status of the operation. When the status is COMPLETE the bot is available in Amazon Lex V2. There may be
    alerts and warnings that need to be resolved to complete the migration."""

    migration_strategy: Optional[MigrationStrategy1OrStr] = Field(default=UNSET, alias="migrationStrategy")
    """The strategy used to conduct the migration."""

    migration_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="migrationTimestamp")
    """The date and time that the migration started."""


class MigrationSummaryDict(TypedDict):
    migration_id: NotRequired[str]
    v1_bot_name: NotRequired[str]
    v1_bot_version: NotRequired[str]
    v1_bot_locale: NotRequired[V1BotLocale1OrStr]
    v2_bot_id: NotRequired[str]
    v2_bot_role: NotRequired[str]
    migration_status: NotRequired[MigrationStatus1OrStr]
    migration_strategy: NotRequired[MigrationStrategy1OrStr]
    migration_timestamp: NotRequired[RFC3339DateTime]
