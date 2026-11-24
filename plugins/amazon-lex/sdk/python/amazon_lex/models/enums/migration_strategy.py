from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MigrationStrategy(str, Enum):
    """The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and migrates the Amazon
    Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon Lex V2 bot metadata and the locale being
    migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is
    created in the Amazon Lex V2 bot."""

    CREATE_NEW = "CREATE_NEW"
    UPDATE_EXISTING = "UPDATE_EXISTING"

    __str__ = str.__str__


MigrationStrategyOrStr: TypeAlias = Annotated[MigrationStrategy | str, open_enum_validator(MigrationStrategy)]
