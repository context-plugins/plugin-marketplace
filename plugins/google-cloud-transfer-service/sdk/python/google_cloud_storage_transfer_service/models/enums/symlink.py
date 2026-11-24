from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Symlink(str, Enum):
    """Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable
    to transfers involving POSIX file systems, and ignored for other transfers."""

    SYMLINK_UNSPECIFIED = "SYMLINK_UNSPECIFIED"
    SYMLINK_SKIP = "SYMLINK_SKIP"
    SYMLINK_PRESERVE = "SYMLINK_PRESERVE"

    __str__ = str.__str__


SymlinkOrStr: TypeAlias = Annotated[Symlink | str, open_enum_validator(Symlink)]
