from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActivationStatus(str, Enum):
    """Current activation status. Progresses from requested → under_review → activated. needs_clarification requires
    additional info from the merchant."""

    REQUESTED = "requested"
    NEEDS_CLARIFICATION = "needs_clarification"
    UNDER_REVIEW = "under_review"
    ACTIVATED = "activated"
    SUSPENDED = "suspended"

    __str__ = str.__str__


ActivationStatusOrStr: TypeAlias = Annotated[ActivationStatus | str, open_enum_validator(ActivationStatus)]
