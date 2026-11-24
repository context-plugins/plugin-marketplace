from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OfferingClass(str, Enum):
    """RI offering class."""

    STANDARD = "standard"
    CONVERTIBLE = "convertible"

    __str__ = str.__str__


OfferingClassOrStr: TypeAlias = Annotated[OfferingClass | str, open_enum_validator(OfferingClass)]
