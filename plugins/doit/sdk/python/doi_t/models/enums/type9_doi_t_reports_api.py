from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type9DoiTReportsApi(str, Enum):
    """Present only when the operation was started against a saved report (run by id) and the report still exists;
    omitted for ad hoc runs against an inline config."""

    CUSTOM = "custom"
    PRESET = "preset"

    __str__ = str.__str__


Type9DoiTReportsApiOrStr: TypeAlias = Annotated[Type9DoiTReportsApi | str, open_enum_validator(Type9DoiTReportsApi)]
