from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentRedactionOutput(str, Enum):
    """Specify whether you want only a redacted transcript or both a redacted and an unredacted transcript. If you
    choose redacted and unredacted, two JSON files are generated and stored in the Amazon S3 output location you
    specify. Note that to include ContentRedactionOutput in your request, you must enable content redaction
    (ContentRedactionType)."""

    REDACTED = "redacted"
    REDACTED_AND_UNREDACTED = "redacted_and_unredacted"

    __str__ = str.__str__


ContentRedactionOutputOrStr: TypeAlias = Annotated[
    ContentRedactionOutput | str, open_enum_validator(ContentRedactionOutput)
]
