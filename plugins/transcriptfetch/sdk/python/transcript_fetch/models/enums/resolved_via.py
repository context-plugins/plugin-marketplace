from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResolvedVia(str, Enum):
    SPOTIFY = "spotify"
    APPLE = "apple"
    RSS = "rss"
    DIRECT = "direct"

    __str__ = str.__str__


ResolvedViaOrStr: TypeAlias = Annotated[ResolvedVia | str, open_enum_validator(ResolvedVia)]
