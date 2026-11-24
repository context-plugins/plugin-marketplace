from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotType2(str, Enum):
    """The type of a bot that was created."""

    BOT = "Bot"
    BOT_NETWORK = "BotNetwork"

    __str__ = str.__str__


BotType2OrStr: TypeAlias = Annotated[BotType2 | str, open_enum_validator(BotType2)]
