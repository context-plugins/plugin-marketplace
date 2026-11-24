from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JsonMode(str, Enum):
    """Optional. MongoDB JSON mode to use for the stream."""

    MONGODB_JSON_MODE_UNSPECIFIED = "MONGODB_JSON_MODE_UNSPECIFIED"
    STRICT = "STRICT"
    CANONICAL = "CANONICAL"

    __str__ = str.__str__


JsonModeOrStr: TypeAlias = Annotated[JsonMode | str, open_enum_validator(JsonMode)]
