from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApplicationStatus(str, Enum):
    APPLICATION_STATUS_UNSPECIFIED = "APPLICATION_STATUS_UNSPECIFIED"
    APPLICATION_STATUS_RUNNING = "APPLICATION_STATUS_RUNNING"
    APPLICATION_STATUS_COMPLETED = "APPLICATION_STATUS_COMPLETED"

    __str__ = str.__str__


ApplicationStatusOrStr: TypeAlias = Annotated[ApplicationStatus | str, open_enum_validator(ApplicationStatus)]
