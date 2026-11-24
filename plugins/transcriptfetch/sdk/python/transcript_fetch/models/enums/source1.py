from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source1(str, Enum):
    """outcome "ok" only."""

    CAPTIONS = "captions"
    AUDIO = "audio"

    __str__ = str.__str__


Source1OrStr: TypeAlias = Annotated[Source1 | str, open_enum_validator(Source1)]
