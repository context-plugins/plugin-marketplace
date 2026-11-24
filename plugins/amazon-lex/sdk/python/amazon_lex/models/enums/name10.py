from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name10(str, Enum):
    """The metric for which you want to get intent stage summary statistics. See Key definitions for more details about
    these metrics. Count – The number of times the intent stage occurred. Success – The number of times the intent stage
    succeeded. Failure – The number of times the intent stage failed. Dropped – The number of times the user dropped the
    intent stage. Retry – The number of times the bot tried to elicit a response from the user at this stage."""

    COUNT = "Count"
    SUCCESS = "Success"
    FAILED = "Failed"
    DROPPED = "Dropped"
    RETRY = "Retry"

    __str__ = str.__str__


Name10OrStr: TypeAlias = Annotated[Name10 | str, open_enum_validator(Name10)]
