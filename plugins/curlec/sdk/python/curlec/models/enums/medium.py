from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Medium(str, Enum):
    SMS = "sms"
    EMAIL = "email"

    __str__ = str.__str__


MediumOrStr: TypeAlias = Annotated[Medium | str, open_enum_validator(Medium)]
