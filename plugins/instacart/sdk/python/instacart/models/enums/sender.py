from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sender(str, Enum):
    """Who sent the message."""

    CUSTOMER = "customer"
    SHOPPER = "shopper"

    __str__ = str.__str__


SenderOrStr: TypeAlias = Annotated[Sender | str, open_enum_validator(Sender)]
