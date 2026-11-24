from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ArchivedBitlyGroupsApi(str, Enum):
    """Filter by archive state."""

    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


ArchivedBitlyGroupsApiOrStr: TypeAlias = Annotated[
    ArchivedBitlyGroupsApi | str, open_enum_validator(ArchivedBitlyGroupsApi)
]
