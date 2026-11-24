from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Smtp(int, Enum):
    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


SmtpOrInt: TypeAlias = Annotated[Smtp | int, open_enum_validator(Smtp)]
