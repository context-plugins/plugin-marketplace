from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTUsersApi(str, Enum):
    """The status of the user (active or invited)."""

    ACTIVE = "active"
    INVITED = "invited"

    __str__ = str.__str__


StatusDoiTUsersApiOrStr: TypeAlias = Annotated[StatusDoiTUsersApi | str, open_enum_validator(StatusDoiTUsersApi)]
