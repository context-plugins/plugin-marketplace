from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsXRayOperationsApi(str, Enum):
    """Status of the retrieval."""

    PENDING = "PENDING"
    ACTIVE = "ACTIVE"

    __str__ = str.__str__


StatusAwsXRayOperationsApiOrStr: TypeAlias = Annotated[
    StatusAwsXRayOperationsApi | str, open_enum_validator(StatusAwsXRayOperationsApi)
]
