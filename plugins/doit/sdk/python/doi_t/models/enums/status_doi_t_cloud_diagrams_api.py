from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTCloudDiagramsApi(str, Enum):
    """Import status."""

    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    SUCCESS = "success"
    FAILURE = "failure"

    __str__ = str.__str__


StatusDoiTCloudDiagramsApiOrStr: TypeAlias = Annotated[
    StatusDoiTCloudDiagramsApi | str, open_enum_validator(StatusDoiTCloudDiagramsApi)
]
