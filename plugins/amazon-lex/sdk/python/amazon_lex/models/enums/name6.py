from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name6(str, Enum):
    """The metric that you requested. See Key definitions for more details about these metrics. Count – The number of
    times the intent was invoked. Success – The number of times the intent succeeded. Failure – The number of times the
    intent failed. Switched – The number of times there was a switch to a different intent. Dropped – The number of
    times the user dropped the intent."""

    COUNT = "Count"
    SUCCESS = "Success"
    FAILURE = "Failure"
    SWITCHED = "Switched"
    DROPPED = "Dropped"

    __str__ = str.__str__


Name6OrStr: TypeAlias = Annotated[Name6 | str, open_enum_validator(Name6)]
