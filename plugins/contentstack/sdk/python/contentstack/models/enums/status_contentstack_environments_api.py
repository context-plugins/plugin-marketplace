from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusContentstackEnvironmentsApi(str, Enum):
    """Current status of the environment."""

    ACTIVE = "active"
    INACTIVE = "inactive"
    DEPLOYING = "deploying"

    __str__ = str.__str__


StatusContentstackEnvironmentsApiOrStr: TypeAlias = Annotated[
    StatusContentstackEnvironmentsApi | str, open_enum_validator(StatusContentstackEnvironmentsApi)
]
