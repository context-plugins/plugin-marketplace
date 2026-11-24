from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RegistrationStatus2(str, Enum):
    """Specifies the registration status of the workflow types to list."""

    REGISTERED = "REGISTERED"
    DEPRECATED = "DEPRECATED"

    __str__ = str.__str__


RegistrationStatus2OrStr: TypeAlias = Annotated[RegistrationStatus2 | str, open_enum_validator(RegistrationStatus2)]
