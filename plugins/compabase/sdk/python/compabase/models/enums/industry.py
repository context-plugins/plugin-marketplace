from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Industry(str, Enum):
    IT = "it"
    CONSTRUCTION = "construction"
    MEDICINE = "medicine"

    __str__ = str.__str__


IndustryOrStr: TypeAlias = Annotated[Industry | str, open_enum_validator(Industry)]
