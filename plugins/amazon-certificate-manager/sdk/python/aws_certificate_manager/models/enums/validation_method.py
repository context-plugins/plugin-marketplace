from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationMethod(str, Enum):
    """Specifies the domain validation method."""

    EMAIL = "EMAIL"
    DNS = "DNS"
    HTTP = "HTTP"

    __str__ = str.__str__


ValidationMethodOrStr: TypeAlias = Annotated[ValidationMethod | str, open_enum_validator(ValidationMethod)]
