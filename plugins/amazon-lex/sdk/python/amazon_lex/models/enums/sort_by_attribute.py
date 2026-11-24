from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByAttribute(str, Enum):
    """The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that
    the migration was started."""

    V1_BOT_NAME = "V1_BOT_NAME"
    MIGRATION_DATE_TIME = "MIGRATION_DATE_TIME"

    __str__ = str.__str__


SortByAttributeOrStr: TypeAlias = Annotated[SortByAttribute | str, open_enum_validator(SortByAttribute)]
