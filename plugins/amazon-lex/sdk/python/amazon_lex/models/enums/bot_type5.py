from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotType5(str, Enum):
    """The type of the bot to be updated."""

    BOT = "Bot"
    BOT_NETWORK = "BotNetwork"

    __str__ = str.__str__


BotType5OrStr: TypeAlias = Annotated[BotType5 | str, open_enum_validator(BotType5)]
