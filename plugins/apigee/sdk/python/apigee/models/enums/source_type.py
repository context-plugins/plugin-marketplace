from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceType(str, Enum):
    """Output only. The type of the source."""

    SOURCE_TYPE_UNSPECIFIED = "SOURCE_TYPE_UNSPECIFIED"
    PLUGIN = "PLUGIN"

    __str__ = str.__str__


SourceTypeOrStr: TypeAlias = Annotated[SourceType | str, open_enum_validator(SourceType)]
