from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code2(str, Enum):
    """Application-specific error code."""

    FORBIDDEN_ACCESS = "forbidden-access"
    NO_PRODUCTION_ACCESS = "no-production-access"
    ACCESS_DENIED = "access-denied"

    __str__ = str.__str__


Code2OrStr: TypeAlias = Annotated[Code2 | str, open_enum_validator(Code2)]
