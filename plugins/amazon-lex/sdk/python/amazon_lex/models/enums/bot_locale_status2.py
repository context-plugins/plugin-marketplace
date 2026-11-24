from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotLocaleStatus2(str, Enum):
    """The status of the bot. When the status is Creating the bot locale is being configured. When the status is
    Building Amazon Lex is building the bot for testing and use. If the status of the bot is ReadyExpressTesting, you
    can test the bot using the exact utterances specified in the bots' intents. When the bot is ready for full testing
    or to run, the status is Built. If there was a problem with building the bot, the status is Failed. If the bot was
    saved but not built, the status is NotBuilt."""

    CREATING = "Creating"
    BUILDING = "Building"
    BUILT = "Built"
    READY_EXPRESS_TESTING = "ReadyExpressTesting"
    FAILED = "Failed"
    DELETING = "Deleting"
    NOT_BUILT = "NotBuilt"
    IMPORTING = "Importing"
    PROCESSING = "Processing"

    __str__ = str.__str__


BotLocaleStatus2OrStr: TypeAlias = Annotated[BotLocaleStatus2 | str, open_enum_validator(BotLocaleStatus2)]
