from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PermissionLevel(str, Enum):
    """The user's permission level for the site."""

    SITE_PERMISSION_LEVEL_UNSPECIFIED = "SITE_PERMISSION_LEVEL_UNSPECIFIED"
    SITE_OWNER = "SITE_OWNER"
    SITE_FULL_USER = "SITE_FULL_USER"
    SITE_RESTRICTED_USER = "SITE_RESTRICTED_USER"
    SITE_UNVERIFIED_USER = "SITE_UNVERIFIED_USER"

    __str__ = str.__str__


PermissionLevelOrStr: TypeAlias = Annotated[PermissionLevel | str, open_enum_validator(PermissionLevel)]
