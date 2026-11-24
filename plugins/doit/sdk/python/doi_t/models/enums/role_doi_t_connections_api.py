from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RoleDoiTConnectionsApi(str, Enum):
    OWNER = "owner"
    EDITOR = "editor"
    USER = "user"

    __str__ = str.__str__


RoleDoiTConnectionsApiOrStr: TypeAlias = Annotated[
    RoleDoiTConnectionsApi | str, open_enum_validator(RoleDoiTConnectionsApi)
]
