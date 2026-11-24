from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResourcePermission(str, Enum):
    """The permission status of a resource."""

    FULL_PERMISSION = "FULL_PERMISSION"
    MISSING_PERMISSION = "MISSING_PERMISSION"

    __str__ = str.__str__


ResourcePermissionOrStr: TypeAlias = Annotated[ResourcePermission | str, open_enum_validator(ResourcePermission)]
