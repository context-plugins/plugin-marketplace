from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiskType(str, Enum):
    """Optional. Deprecated: Use type instead."""

    DISK_TYPE_UNSPECIFIED = "DISK_TYPE_UNSPECIFIED"
    HYPERDISK_BALANCED = "HYPERDISK_BALANCED"
    HYPERDISK_EXTREME = "HYPERDISK_EXTREME"
    HYPERDISK_ML = "HYPERDISK_ML"
    HYPERDISK_THROUGHPUT = "HYPERDISK_THROUGHPUT"

    __str__ = str.__str__


DiskTypeOrStr: TypeAlias = Annotated[DiskType | str, open_enum_validator(DiskType)]
