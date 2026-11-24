from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name24(str, Enum):
    """The name of the field to filter the list of bots."""

    BOT_NAME = "BotName"
    BOT_TYPE = "BotType"

    __str__ = str.__str__


Name24OrStr: TypeAlias = Annotated[Name24 | str, open_enum_validator(Name24)]
