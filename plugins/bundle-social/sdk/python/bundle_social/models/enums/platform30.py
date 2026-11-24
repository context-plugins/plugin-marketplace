from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform30(str, Enum):
    """Messaging platform. Extensible: new platforms are added over time, so handle unknown values gracefully rather
    than switching exhaustively."""

    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"

    __str__ = str.__str__


Platform30OrStr: TypeAlias = Annotated[Platform30 | str, open_enum_validator(Platform30)]
