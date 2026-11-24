from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.migration_status import MigrationStatusOrStr
from .enums.migration_strategy import MigrationStrategyOrStr
from .enums.v1_bot_locale import V1BotLocaleOrStr
from .migration_alert import MigrationAlert, MigrationAlertDict


class GetMigrationResponse(SdkBaseModel):
    migration_id: Optional[str] = Field(default=UNSET, alias="migrationId")
    """The unique identifier of the migration. This is the same as the identifier used when calling the GetMigration
    operation."""

    v1_bot_name: Optional[str] = Field(default=UNSET, alias="v1BotName")
    """The name of the Amazon Lex V1 bot migrated to Amazon Lex V2."""

    v1_bot_version: Optional[str] = Field(default=UNSET, alias="v1BotVersion")
    """The version of the Amazon Lex V1 bot migrated to Amazon Lex V2."""

    v1_bot_locale: Optional[V1BotLocaleOrStr] = Field(default=UNSET, alias="v1BotLocale")
    """The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2."""

    v2_bot_id: Optional[str] = Field(default=UNSET, alias="v2BotId")
    """The unique identifier of the Amazon Lex V2 bot that the Amazon Lex V1 is being migrated to."""

    v2_bot_role: Optional[str] = Field(default=UNSET, alias="v2BotRole")
    """The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot."""

    migration_status: Optional[MigrationStatusOrStr] = Field(default=UNSET, alias="migrationStatus")
    """Indicates the status of the migration. When the status is COMPLETE the migration is finished and the bot is
    available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration."""

    migration_strategy: Optional[MigrationStrategyOrStr] = Field(default=UNSET, alias="migrationStrategy")
    """The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and migrates the Amazon
    Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon Lex V2 bot metadata and the locale being
    migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is
    created in the Amazon Lex V2 bot."""

    migration_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="migrationTimestamp")
    """The date and time that the migration started."""

    alerts: Optional[list[MigrationAlert]] = UNSET
    """A list of alerts and warnings that indicate issues with the migration for the Amazon Lex V1 bot to Amazon Lex V2.
    You receive a warning when an Amazon Lex V1 feature has a different implementation if Amazon Lex V2. For more
    information, see Migrating a bot in the Amazon Lex V2 developer guide."""


class GetMigrationResponseDict(TypedDict):
    migration_id: NotRequired[str]
    v1_bot_name: NotRequired[str]
    v1_bot_version: NotRequired[str]
    v1_bot_locale: NotRequired[V1BotLocaleOrStr]
    v2_bot_id: NotRequired[str]
    v2_bot_role: NotRequired[str]
    migration_status: NotRequired[MigrationStatusOrStr]
    migration_strategy: NotRequired[MigrationStrategyOrStr]
    migration_timestamp: NotRequired[RFC3339DateTime]
    alerts: NotRequired[list[MigrationAlertDict]]
