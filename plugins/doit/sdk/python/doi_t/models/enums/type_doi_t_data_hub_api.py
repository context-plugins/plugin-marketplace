from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTDataHubApi(str, Enum):
    """The dimension type."""

    FIXED = "fixed"
    LABEL = "label"
    PROJECT_LABEL = "project_label"
    SYSTEM_LABEL = "system_label"

    __str__ = str.__str__


TypeDoiTDataHubApiOrStr: TypeAlias = Annotated[TypeDoiTDataHubApi | str, open_enum_validator(TypeDoiTDataHubApi)]
