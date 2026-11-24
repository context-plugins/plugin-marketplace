from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationMethod4(str, Enum):
    """The method you want to use if you are requesting a public certificate to validate that you own or control domain.
    You can validate with DNS or validate with email. We recommend that you use DNS validation."""

    EMAIL = "EMAIL"
    DNS = "DNS"
    HTTP = "HTTP"

    __str__ = str.__str__


ValidationMethod4OrStr: TypeAlias = Annotated[ValidationMethod4 | str, open_enum_validator(ValidationMethod4)]
