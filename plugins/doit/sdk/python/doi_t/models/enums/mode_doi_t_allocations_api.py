from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeDoiTAllocationsApi(str, Enum):
    """Filter mode to apply. When type is "allocation_rule", only "is" and "contains" modes are supported."""

    IS = "is"
    STARTS_WITH = "starts_with"
    ENDS_WITH = "ends_with"
    CONTAINS = "contains"
    REGEXP = "regexp"

    __str__ = str.__str__


ModeDoiTAllocationsApiOrStr: TypeAlias = Annotated[
    ModeDoiTAllocationsApi | str, open_enum_validator(ModeDoiTAllocationsApi)
]
