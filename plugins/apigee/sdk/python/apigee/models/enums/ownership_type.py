from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OwnershipType(str, Enum):
    """Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'."""

    OWNERSHIP_TYPE_UNSPECIFIED = "OWNERSHIP_TYPE_UNSPECIFIED"
    SYSTEM_OWNED = "SYSTEM_OWNED"
    USER_OWNED = "USER_OWNED"

    __str__ = str.__str__


OwnershipTypeOrStr: TypeAlias = Annotated[OwnershipType | str, open_enum_validator(OwnershipType)]
