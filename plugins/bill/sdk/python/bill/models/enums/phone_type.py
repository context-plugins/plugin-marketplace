from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PhoneType(str, Enum):
    """Enum for phone type."""

    MOBILE = "MOBILE"
    HOME = "HOME"

    __str__ = str.__str__


PhoneTypeOrStr: TypeAlias = Annotated[PhoneType | str, open_enum_validator(PhoneType)]
