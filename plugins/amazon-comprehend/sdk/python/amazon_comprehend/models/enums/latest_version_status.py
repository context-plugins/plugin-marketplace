from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LatestVersionStatus(str, Enum):
    """Provides the status of the latest document classifier version."""

    SUBMITTED = "SUBMITTED"
    TRAINING = "TRAINING"
    DELETING = "DELETING"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"
    IN_ERROR = "IN_ERROR"
    TRAINED = "TRAINED"
    TRAINED_WITH_WARNING = "TRAINED_WITH_WARNING"

    __str__ = str.__str__


LatestVersionStatusOrStr: TypeAlias = Annotated[LatestVersionStatus | str, open_enum_validator(LatestVersionStatus)]
