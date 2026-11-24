from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotType3(str, Enum):
    """The type of the bot that was described."""

    BOT = "Bot"
    BOT_NETWORK = "BotNetwork"

    __str__ = str.__str__


BotType3OrStr: TypeAlias = Annotated[BotType3 | str, open_enum_validator(BotType3)]
