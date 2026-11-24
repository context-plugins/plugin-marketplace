from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParsingMode(str, Enum):
    """Optional. Input only. Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing."""

    PARSING_MODE_UNSPECIFIED = "PARSING_MODE_UNSPECIFIED"
    RELAXED = "RELAXED"
    STRICT = "STRICT"

    __str__ = str.__str__


ParsingModeOrStr: TypeAlias = Annotated[ParsingMode | str, open_enum_validator(ParsingMode)]
