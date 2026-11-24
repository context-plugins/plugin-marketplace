from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type6DoiTReportsApi(str, Enum):
    """The metadata field type."""

    FIXED = "fixed"
    LABEL = "label"
    TAG = "tag"
    PROJECT_LABEL = "project_label"
    SYSTEM_LABEL = "system_label"

    __str__ = str.__str__


Type6DoiTReportsApiOrStr: TypeAlias = Annotated[Type6DoiTReportsApi | str, open_enum_validator(Type6DoiTReportsApi)]
