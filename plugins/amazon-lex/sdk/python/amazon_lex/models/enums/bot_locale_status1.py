from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotLocaleStatus1(str, Enum):
    """The bot's build status. When the status is ReadyExpressTesting you can test the bot using the utterances defined
    for the intents and slot types. When the status is Built, the bot is ready for use and can be tested using any
    utterance."""

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


BotLocaleStatus1OrStr: TypeAlias = Annotated[BotLocaleStatus1 | str, open_enum_validator(BotLocaleStatus1)]
