from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportStatus2(str, Enum):
    """The status of the resource. When the status is Completed the resource is ready to build."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ImportStatus2OrStr: TypeAlias = Annotated[ImportStatus2 | str, open_enum_validator(ImportStatus2)]
