from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RoleDoiTSharingApi(str, Enum):
    """The role assigned to the user, defining their level of access to the resource."""

    OWNER = "owner"
    EDITOR = "editor"
    VIEWER = "viewer"

    __str__ = str.__str__


RoleDoiTSharingApiOrStr: TypeAlias = Annotated[RoleDoiTSharingApi | str, open_enum_validator(RoleDoiTSharingApi)]
