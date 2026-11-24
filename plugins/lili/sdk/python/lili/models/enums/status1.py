from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """The payment status"""

    SUCCESS = "SUCCESS"
    ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND"
    ACCOUNT_CLOSED = "ACCOUNT_CLOSED"
    NOT_RELEASED_EARLY = "NOT_RELEASED_EARLY"
    TECHNICAL_ERROR = "TECHNICAL_ERROR"
    BAD_DATA = "BAD_DATA"
    EFFECTIVE_DATE_PAST = "EFFECTIVE_DATE_PAST"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
