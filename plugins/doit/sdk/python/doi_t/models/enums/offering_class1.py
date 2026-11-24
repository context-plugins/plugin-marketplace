from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OfferingClass1(str, Enum):
    STANDARD = "standard"
    CONVERTIBLE = "convertible"

    __str__ = str.__str__


OfferingClass1OrStr: TypeAlias = Annotated[OfferingClass1 | str, open_enum_validator(OfferingClass1)]
