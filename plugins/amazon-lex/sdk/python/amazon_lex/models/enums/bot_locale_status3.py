from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotLocaleStatus3(str, Enum):
    """The status of deleting the bot locale. The locale first enters the Deleting status. Once the locale is deleted it
    no longer appears in the list of locales for the bot."""

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


BotLocaleStatus3OrStr: TypeAlias = Annotated[BotLocaleStatus3 | str, open_enum_validator(BotLocaleStatus3)]
