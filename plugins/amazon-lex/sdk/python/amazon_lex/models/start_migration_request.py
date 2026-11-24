from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.migration_strategy import MigrationStrategyOrStr


class StartMigrationRequest(SdkBaseModel):
    v1_bot_name: str = Field(alias="v1BotName")
    """The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2."""

    v1_bot_version: str = Field(alias="v1BotVersion")
    """The version of the bot to migrate to Amazon Lex V2. You can migrate the $LATEST version as well as any numbered
    version."""

    v2_bot_name: str = Field(alias="v2BotName")
    """The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to. If the Amazon Lex V2 bot
    doesn't exist, you must use the CREATE_NEW migration strategy. If the Amazon Lex V2 bot exists, you must use the
    UPDATE_EXISTING migration strategy to change the contents of the Amazon Lex V2 bot."""

    v2_bot_role: str = Field(alias="v2BotRole")
    """The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot."""

    migration_strategy: MigrationStrategyOrStr = Field(alias="migrationStrategy")
    """The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and migrates the Amazon
    Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon Lex V2 bot metadata and the locale being
    migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is
    created in the Amazon Lex V2 bot."""


class StartMigrationRequestDict(TypedDict):
    v1_bot_name: str
    v1_bot_version: str
    v2_bot_name: str
    v2_bot_role: str
    migration_strategy: MigrationStrategyOrStr
