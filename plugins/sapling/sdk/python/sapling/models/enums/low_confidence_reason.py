from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LowConfidenceReason(str, Enum):
    SHORT_TEXT = "short_text"
    LIST_FORMAT = "list_format"

    __str__ = str.__str__


LowConfidenceReasonOrStr: TypeAlias = Annotated[LowConfidenceReason | str, open_enum_validator(LowConfidenceReason)]
