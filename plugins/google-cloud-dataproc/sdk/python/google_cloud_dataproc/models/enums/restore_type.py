from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RestoreType(str, Enum):
    """Optional. The type of restore. If unspecified, defaults to METADATA_ONLY."""

    RESTORE_TYPE_UNSPECIFIED = "RESTORE_TYPE_UNSPECIFIED"
    FULL = "FULL"
    METADATA_ONLY = "METADATA_ONLY"

    __str__ = str.__str__


RestoreTypeOrStr: TypeAlias = Annotated[RestoreType | str, open_enum_validator(RestoreType)]
