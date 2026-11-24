from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name5(str, Enum):
    """The metric for which you want to get intent summary statistics. Count – The number of times the intent was
    invoked. Success – The number of times the intent succeeded. Failure – The number of times the intent failed.
    Switched – The number of times there was a switch to a different intent. Dropped – The number of times the user
    dropped the intent."""

    COUNT = "Count"
    SUCCESS = "Success"
    FAILURE = "Failure"
    SWITCHED = "Switched"
    DROPPED = "Dropped"

    __str__ = str.__str__


Name5OrStr: TypeAlias = Annotated[Name5 | str, open_enum_validator(Name5)]
