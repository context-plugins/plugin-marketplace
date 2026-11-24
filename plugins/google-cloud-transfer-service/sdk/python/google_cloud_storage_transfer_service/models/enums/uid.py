from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Uid(str, Enum):
    """Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not
    preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers."""

    UID_UNSPECIFIED = "UID_UNSPECIFIED"
    UID_SKIP = "UID_SKIP"
    UID_NUMBER = "UID_NUMBER"

    __str__ = str.__str__


UidOrStr: TypeAlias = Annotated[Uid | str, open_enum_validator(Uid)]
