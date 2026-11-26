from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportStatus(str, Enum):
    """Enumeration of entities that map from bipaas."""

    CREATED = "CREATED"
    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    DATA_REQUESTED = "DATA_REQUESTED"
    DATA_GENERATION_IN_PROGRESS = "DATA_GENERATION_IN_PROGRESS"
    FILE_READY_FOR_TRANSFER = "FILE_READY_FOR_TRANSFER"
    FILE_TRANSFER_IN_PROGRESS = "FILE_TRANSFER_IN_PROGRESS"
    FILE_TRANSFERRED = "FILE_TRANSFERRED"
    FILE_TRANSFER_FAILED = "FILE_TRANSFER_FAILED"
    SUCCESS = "SUCCESS"
    PARTIAL_SUCCESS = "PARTIAL_SUCCESS"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    EXPIRED = "EXPIRED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


ExportStatusOrStr: TypeAlias = Annotated[ExportStatus | str, open_enum_validator(ExportStatus)]
