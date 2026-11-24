from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicApiOnboardingStateDto(str, Enum):
    QUEUED = "queued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


PublicApiOnboardingStateDtoOrStr: TypeAlias = Annotated[
    PublicApiOnboardingStateDto | str, open_enum_validator(PublicApiOnboardingStateDto)
]
