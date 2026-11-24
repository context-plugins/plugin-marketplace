from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format(str, Enum):
    """Output only. The format of the input specification file contents."""

    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    YAML = "YAML"
    JSON = "JSON"

    __str__ = str.__str__


FormatOrStr: TypeAlias = Annotated[Format | str, open_enum_validator(Format)]
