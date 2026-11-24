from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenewalPolicy1(str, Enum):
    AUTO = "auto"
    MANUAL = "manual"
    FIXED = "fixed"

    __str__ = str.__str__


RenewalPolicy1OrStr: TypeAlias = Annotated[RenewalPolicy1 | str, open_enum_validator(RenewalPolicy1)]
