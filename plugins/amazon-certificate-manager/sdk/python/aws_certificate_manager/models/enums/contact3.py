from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Contact3(str, Enum):
    """The updated contact requirement."""

    REQUIRED = "REQUIRED"
    NOT_REQUIRED = "NOT_REQUIRED"

    __str__ = str.__str__


Contact3OrStr: TypeAlias = Annotated[Contact3 | str, open_enum_validator(Contact3)]
