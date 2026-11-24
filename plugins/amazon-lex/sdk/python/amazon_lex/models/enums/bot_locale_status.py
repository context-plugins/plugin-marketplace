from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotLocaleStatus(str, Enum):
    """The current status of the bot locale. When the status is Built the locale is ready for use."""

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


BotLocaleStatusOrStr: TypeAlias = Annotated[BotLocaleStatus | str, open_enum_validator(BotLocaleStatus)]
