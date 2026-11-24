from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RegistrationStatus1(str, Enum):
    """Specifies the registration status of the domains to list."""

    REGISTERED = "REGISTERED"
    DEPRECATED = "DEPRECATED"

    __str__ = str.__str__


RegistrationStatus1OrStr: TypeAlias = Annotated[RegistrationStatus1 | str, open_enum_validator(RegistrationStatus1)]
