from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Gid(str, Enum):
    """Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is
    not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers."""

    GID_UNSPECIFIED = "GID_UNSPECIFIED"
    GID_SKIP = "GID_SKIP"
    GID_NUMBER = "GID_NUMBER"

    __str__ = str.__str__


GidOrStr: TypeAlias = Annotated[Gid | str, open_enum_validator(Gid)]
