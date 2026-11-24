from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InterpretationSource(str, Enum):
    """Specifies the service that interpreted the input."""

    BEDROCK = "Bedrock"
    LEX = "Lex"

    __str__ = str.__str__


InterpretationSourceOrStr: TypeAlias = Annotated[InterpretationSource | str, open_enum_validator(InterpretationSource)]
