from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaxIdTypeRequest(str, Enum):
    """The enum Tax id type enum."""

    EIN = "EIN"
    SSN = "SSN"

    __str__ = str.__str__


TaxIdTypeRequestOrStr: TypeAlias = Annotated[TaxIdTypeRequest | str, open_enum_validator(TaxIdTypeRequest)]
