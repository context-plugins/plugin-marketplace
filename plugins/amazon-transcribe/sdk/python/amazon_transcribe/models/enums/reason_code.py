from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonCode(str, Enum):
    """Provides a code indicating the reason why a specific analytics feature was skipped during the analysis of a call
    analytics job."""

    INSUFFICIENT_CONVERSATION_CONTENT = "INSUFFICIENT_CONVERSATION_CONTENT"
    FAILED_SAFETY_GUIDELINES = "FAILED_SAFETY_GUIDELINES"

    __str__ = str.__str__


ReasonCodeOrStr: TypeAlias = Annotated[ReasonCode | str, open_enum_validator(ReasonCode)]
