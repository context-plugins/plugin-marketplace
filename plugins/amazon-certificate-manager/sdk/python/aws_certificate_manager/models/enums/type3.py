from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    """The type of update that was requested for the certificate. The following are valid values:
    DOMAIN_VALIDATION_METHOD – The update changes the domain validation method for the certificate."""

    DOMAIN_VALIDATION_METHOD = "DOMAIN_VALIDATION_METHOD"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
