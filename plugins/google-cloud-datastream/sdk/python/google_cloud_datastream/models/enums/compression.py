from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Compression(str, Enum):
    """Compression of the loaded JSON file."""

    JSON_COMPRESSION_UNSPECIFIED = "JSON_COMPRESSION_UNSPECIFIED"
    NO_COMPRESSION = "NO_COMPRESSION"
    GZIP = "GZIP"

    __str__ = str.__str__


CompressionOrStr: TypeAlias = Annotated[Compression | str, open_enum_validator(Compression)]
