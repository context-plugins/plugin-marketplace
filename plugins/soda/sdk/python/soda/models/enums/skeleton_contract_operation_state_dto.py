from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SkeletonContractOperationStateDto(str, Enum):
    ONGOING = "ongoing"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELED = "canceled"

    __str__ = str.__str__


SkeletonContractOperationStateDtoOrStr: TypeAlias = Annotated[
    SkeletonContractOperationStateDto | str, open_enum_validator(SkeletonContractOperationStateDto)
]
