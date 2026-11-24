from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Atom type."""

    ATOM = "ATOM"
    MOLECULE = "MOLECULE"
    CLOUD = "CLOUD"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
