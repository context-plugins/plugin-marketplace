from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OnSchemaViolation(str, Enum):
    """What happens to events that violate the schema. One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults to
    BLOCK_EVENT."""

    ALLOW_EVENT = "ALLOW_EVENT"
    BLOCK_EVENT = "BLOCK_EVENT"

    __str__ = str.__str__


OnSchemaViolationOrStr: TypeAlias = Annotated[OnSchemaViolation | str, open_enum_validator(OnSchemaViolation)]
