from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name(str, Enum):
    """The parameter name for a filter that determines which files are included or excluded from a cache report. Valid
    Names: UploadFailureReason | UploadState"""

    UPLOAD_STATE = "UploadState"
    UPLOAD_FAILURE_REASON = "UploadFailureReason"

    __str__ = str.__str__


NameOrStr: TypeAlias = Annotated[Name | str, open_enum_validator(Name)]
