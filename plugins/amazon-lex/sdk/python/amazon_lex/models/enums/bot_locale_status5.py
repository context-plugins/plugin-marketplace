from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotLocaleStatus5(str, Enum):
    """The current status of the locale. When the bot status is Built the locale is ready for use."""

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


BotLocaleStatus5OrStr: TypeAlias = Annotated[BotLocaleStatus5 | str, open_enum_validator(BotLocaleStatus5)]
