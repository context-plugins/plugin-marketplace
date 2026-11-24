from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name11(str, Enum):
    """The metric that you requested. Count – The number of times the intent stage occurred. Success – The number of
    times the intent stage succeeded. Failure – The number of times the intent stage failed. Dropped – The number of
    times the user dropped the intent stage. Retry – The number of times the bot tried to elicit a response from the
    user at this stage."""

    COUNT = "Count"
    SUCCESS = "Success"
    FAILED = "Failed"
    DROPPED = "Dropped"
    RETRY = "Retry"

    __str__ = str.__str__


Name11OrStr: TypeAlias = Annotated[Name11 | str, open_enum_validator(Name11)]
