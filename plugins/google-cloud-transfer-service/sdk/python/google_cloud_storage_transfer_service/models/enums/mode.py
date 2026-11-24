from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode(str, Enum):
    """Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved.
    Only applicable to transfers involving POSIX file systems, and ignored for other transfers."""

    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    MODE_SKIP = "MODE_SKIP"
    MODE_PRESERVE = "MODE_PRESERVE"

    __str__ = str.__str__


ModeOrStr: TypeAlias = Annotated[Mode | str, open_enum_validator(Mode)]
