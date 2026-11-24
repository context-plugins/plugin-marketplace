from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code1(str, Enum):
    """Application-specific error code, expressed as a string value."""

    FORBIDDEN_ACCESS = "forbidden-access"
    NO_PRODUCTION_ACCESS = "no-production-access"
    ACCESS_DENIED = "access-denied"

    __str__ = str.__str__


Code1OrStr: TypeAlias = Annotated[Code1 | str, open_enum_validator(Code1)]
