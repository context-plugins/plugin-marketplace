from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ThreeDsChallengeStatus(str, Enum):
    """Enum representing the status of a 3D Secure (3DS) challenge."""

    SKIPPED = "SKIPPED"
    PENDING = "PENDING"
    SENT = "SENT"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    CANCELLED = "CANCELLED"
    TIMED_OUT = "TIMED_OUT"
    FAILED = "FAILED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


ThreeDsChallengeStatusOrStr: TypeAlias = Annotated[
    ThreeDsChallengeStatus | str, open_enum_validator(ThreeDsChallengeStatus)
]
