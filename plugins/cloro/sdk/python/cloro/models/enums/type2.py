from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """Sub-type discriminator. TEXT ads carry ``domain`` + ``description``; SHOPPING ads carry ``price`` + ``store`` (+
    optional ``old_price``). Always present."""

    TEXT = "TEXT"
    SHOPPING = "SHOPPING"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
