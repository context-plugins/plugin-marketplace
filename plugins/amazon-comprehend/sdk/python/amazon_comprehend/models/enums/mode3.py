from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode3(str, Enum):
    """Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are
    redacted."""

    ONLY_REDACTION = "ONLY_REDACTION"
    ONLY_OFFSETS = "ONLY_OFFSETS"

    __str__ = str.__str__


Mode3OrStr: TypeAlias = Annotated[Mode3 | str, open_enum_validator(Mode3)]
