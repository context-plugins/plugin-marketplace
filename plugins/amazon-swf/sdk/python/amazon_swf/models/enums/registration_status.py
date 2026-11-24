from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RegistrationStatus(str, Enum):
    """Specifies the registration status of the activity types to list."""

    REGISTERED = "REGISTERED"
    DEPRECATED = "DEPRECATED"

    __str__ = str.__str__


RegistrationStatusOrStr: TypeAlias = Annotated[RegistrationStatus | str, open_enum_validator(RegistrationStatus)]
