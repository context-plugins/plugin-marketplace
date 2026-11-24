from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SseType(str, Enum):
    """Reserved for future use."""

    SSE_EBS = "sse-ebs"
    SSE_KMS = "sse-kms"
    NONE = "none"

    __str__ = str.__str__


SseTypeOrStr: TypeAlias = Annotated[SseType | str, open_enum_validator(SseType)]
