from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TraceStatus(str, Enum):
    """The Bedrock trace status in the Bedrock model specification details."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


TraceStatusOrStr: TypeAlias = Annotated[TraceStatus | str, open_enum_validator(TraceStatus)]
