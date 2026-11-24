from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotLocaleStatus4(str, Enum):
    """The status of the bot. If the status is Failed, the reasons for the failure are listed in the failureReasons
    field."""

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


BotLocaleStatus4OrStr: TypeAlias = Annotated[BotLocaleStatus4 | str, open_enum_validator(BotLocaleStatus4)]
