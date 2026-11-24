from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotType6(str, Enum):
    """The type of the bot that was updated."""

    BOT = "Bot"
    BOT_NETWORK = "BotNetwork"

    __str__ = str.__str__


BotType6OrStr: TypeAlias = Annotated[BotType6 | str, open_enum_validator(BotType6)]
