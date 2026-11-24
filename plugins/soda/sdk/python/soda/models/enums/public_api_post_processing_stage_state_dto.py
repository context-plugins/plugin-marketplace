from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicApiPostProcessingStageStateDto(str, Enum):
    ONGOING = "ongoing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


PublicApiPostProcessingStageStateDtoOrStr: TypeAlias = Annotated[
    PublicApiPostProcessingStageStateDto | str, open_enum_validator(PublicApiPostProcessingStageStateDto)
]
