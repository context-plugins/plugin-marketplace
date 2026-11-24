from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.migration_strategy1 import MigrationStrategy1OrStr
from .enums.v1_bot_locale2 import V1BotLocale2OrStr


class StartMigrationResponse(SdkBaseModel):
    v1_bot_name: Optional[str] = Field(default=UNSET, alias="v1BotName")
    """The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2."""

    v1_bot_version: Optional[str] = Field(default=UNSET, alias="v1BotVersion")
    """The version of the bot to migrate to Amazon Lex V2."""

    v1_bot_locale: Optional[V1BotLocale2OrStr] = Field(default=UNSET, alias="v1BotLocale")
    """The locale used for the Amazon Lex V1 bot."""

    v2_bot_id: Optional[str] = Field(default=UNSET, alias="v2BotId")
    """The unique identifier for the Amazon Lex V2 bot."""

    v2_bot_role: Optional[str] = Field(default=UNSET, alias="v2BotRole")
    """The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot."""

    migration_id: Optional[str] = Field(default=UNSET, alias="migrationId")
    """The unique identifier that Amazon Lex assigned to the migration."""

    migration_strategy: Optional[MigrationStrategy1OrStr] = Field(default=UNSET, alias="migrationStrategy")
    """The strategy used to conduct the migration."""

    migration_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="migrationTimestamp")
    """The date and time that the migration started."""


class StartMigrationResponseDict(TypedDict):
    v1_bot_name: NotRequired[str]
    v1_bot_version: NotRequired[str]
    v1_bot_locale: NotRequired[V1BotLocale2OrStr]
    v2_bot_id: NotRequired[str]
    v2_bot_role: NotRequired[str]
    migration_id: NotRequired[str]
    migration_strategy: NotRequired[MigrationStrategy1OrStr]
    migration_timestamp: NotRequired[RFC3339DateTime]
