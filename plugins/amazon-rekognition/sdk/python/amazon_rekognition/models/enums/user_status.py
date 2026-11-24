from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UserStatus(str, Enum):
    """The status of an update made to a UserID. Reflects if the UserID has been updated for every requested change."""

    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    CREATING = "CREATING"
    CREATED = "CREATED"

    __str__ = str.__str__


UserStatusOrStr: TypeAlias = Annotated[UserStatus | str, open_enum_validator(UserStatus)]
