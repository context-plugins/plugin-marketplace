from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AddressType(str, Enum):
    """The type of address object present."""

    PAF = "paf"
    SIMPLE = "simple"

    __str__ = str.__str__


AddressTypeOrStr: TypeAlias = Annotated[AddressType | str, open_enum_validator(AddressType)]
