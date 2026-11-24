from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotType(str, Enum):
    """The type of the bot."""

    BOT = "Bot"
    BOT_NETWORK = "BotNetwork"

    __str__ = str.__str__


BotTypeOrStr: TypeAlias = Annotated[BotType | str, open_enum_validator(BotType)]
