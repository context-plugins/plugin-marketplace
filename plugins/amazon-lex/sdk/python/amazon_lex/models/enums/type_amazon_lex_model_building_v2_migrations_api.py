from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonLexModelBuildingV2MigrationsApi(str, Enum):
    """The type of alert. There are two kinds of alerts: ERROR - There was an issue with the migration that can't be
    resolved. The migration stops. WARN - There was an issue with the migration that requires manual changes to the new
    Amazon Lex V2 bot. The migration continues."""

    ERROR = "ERROR"
    WARN = "WARN"

    __str__ = str.__str__


TypeAmazonLexModelBuildingV2MigrationsApiOrStr: TypeAlias = Annotated[
    TypeAmazonLexModelBuildingV2MigrationsApi | str, open_enum_validator(TypeAmazonLexModelBuildingV2MigrationsApi)
]
