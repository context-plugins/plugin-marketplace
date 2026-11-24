from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotType1(str, Enum):
    """The type of a bot to create."""

    BOT = "Bot"
    BOT_NETWORK = "BotNetwork"

    __str__ = str.__str__


BotType1OrStr: TypeAlias = Annotated[BotType1 | str, open_enum_validator(BotType1)]
