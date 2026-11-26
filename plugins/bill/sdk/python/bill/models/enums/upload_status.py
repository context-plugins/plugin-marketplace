from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UploadStatus(str, Enum):
    """Document upload status."""

    UPLOADED = "UPLOADED"
    IN_PROGRESS = "IN_PROGRESS"
    IVA_PROCESSING = "IVA_PROCESSING"
    AUTOSAVED = "AUTOSAVED"
    FAILED = "FAILED"

    __str__ = str.__str__


UploadStatusOrStr: TypeAlias = Annotated[UploadStatus | str, open_enum_validator(UploadStatus)]
