from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationMethod1(str, Enum):
    """Filter by validation method."""

    EMAIL = "EMAIL"
    DNS = "DNS"
    HTTP = "HTTP"

    __str__ = str.__str__


ValidationMethod1OrStr: TypeAlias = Annotated[ValidationMethod1 | str, open_enum_validator(ValidationMethod1)]
