from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotType4(str, Enum):
    """The type of the bot in the version that was described."""

    BOT = "Bot"
    BOT_NETWORK = "BotNetwork"

    __str__ = str.__str__


BotType4OrStr: TypeAlias = Annotated[BotType4 | str, open_enum_validator(BotType4)]
