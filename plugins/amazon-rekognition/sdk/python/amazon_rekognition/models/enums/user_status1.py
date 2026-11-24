from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UserStatus1(str, Enum):
    """The status of an update made to a User. Reflects if the User has been updated for every requested change."""

    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    CREATING = "CREATING"
    CREATED = "CREATED"

    __str__ = str.__str__


UserStatus1OrStr: TypeAlias = Annotated[UserStatus1 | str, open_enum_validator(UserStatus1)]
