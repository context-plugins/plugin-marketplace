from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SendEmailStatus(int, Enum):
    """1 = Sent 3 = NoEmail"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


SendEmailStatusOrInt: TypeAlias = Annotated[SendEmailStatus | int, open_enum_validator(SendEmailStatus)]
