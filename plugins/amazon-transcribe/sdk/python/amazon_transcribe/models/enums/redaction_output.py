from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RedactionOutput(str, Enum):
    """Specify if you want only a redacted transcript, or if you want a redacted and an unredacted transcript. When you
    choose redacted Amazon Transcribe creates only a redacted transcript. When you choose redacted_and_unredacted Amazon
    Transcribe creates a redacted and an unredacted transcript (as two separate files)."""

    REDACTED = "redacted"
    REDACTED_AND_UNREDACTED = "redacted_and_unredacted"

    __str__ = str.__str__


RedactionOutputOrStr: TypeAlias = Annotated[RedactionOutput | str, open_enum_validator(RedactionOutput)]
