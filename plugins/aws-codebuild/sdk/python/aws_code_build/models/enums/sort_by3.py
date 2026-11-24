from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy3(str, Enum):
    """The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid
    values include: ARN: List based on the ARN. MODIFIED_TIME: List based on when information about the shared report
    group was last changed."""

    ARN = "ARN"
    MODIFIED_TIME = "MODIFIED_TIME"

    __str__ = str.__str__


SortBy3OrStr: TypeAlias = Annotated[SortBy3 | str, open_enum_validator(SortBy3)]
