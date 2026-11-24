from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisbursementSubType(str, Enum):
    """PayBy."""

    NONE = "NONE"
    WIRE = "WIRE"
    IACH = "IACH"
    LOCAL = "LOCAL"
    MULTIPLE = "MULTIPLE"
    ACH = "ACH"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


DisbursementSubTypeOrStr: TypeAlias = Annotated[DisbursementSubType | str, open_enum_validator(DisbursementSubType)]
