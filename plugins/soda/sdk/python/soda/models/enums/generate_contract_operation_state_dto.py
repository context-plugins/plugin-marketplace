from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GenerateContractOperationStateDto(str, Enum):
    ONGOING = "ongoing"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELED = "canceled"

    __str__ = str.__str__


GenerateContractOperationStateDtoOrStr: TypeAlias = Annotated[
    GenerateContractOperationStateDto | str, open_enum_validator(GenerateContractOperationStateDto)
]
