from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaxIdTypeResponse(str, Enum):
    """The enum Tax id type enum."""

    EIN = "EIN"
    SSN = "SSN"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


TaxIdTypeResponseOrStr: TypeAlias = Annotated[TaxIdTypeResponse | str, open_enum_validator(TaxIdTypeResponse)]
