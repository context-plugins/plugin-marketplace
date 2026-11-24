from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusContentstackPersonalizeManagementExperiencesApi(str, Enum):
    """Current status of the experience."""

    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    ENDED = "ENDED"

    __str__ = str.__str__


StatusContentstackPersonalizeManagementExperiencesApiOrStr: TypeAlias = Annotated[
    StatusContentstackPersonalizeManagementExperiencesApi | str,
    open_enum_validator(StatusContentstackPersonalizeManagementExperiencesApi),
]
