from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExactDomain(str, Enum):
    """Whether validation applies to the exact domain."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


ExactDomainOrStr: TypeAlias = Annotated[ExactDomain | str, open_enum_validator(ExactDomain)]
