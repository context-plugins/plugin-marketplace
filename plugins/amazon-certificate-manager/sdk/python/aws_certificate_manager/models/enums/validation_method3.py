from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationMethod3(str, Enum):
    """The domain validation method for the certificate. To migrate from email to DNS validation, specify DNS."""

    EMAIL = "EMAIL"
    DNS = "DNS"
    HTTP = "HTTP"

    __str__ = str.__str__


ValidationMethod3OrStr: TypeAlias = Annotated[ValidationMethod3 | str, open_enum_validator(ValidationMethod3)]
