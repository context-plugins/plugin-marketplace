from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CommitmentTerm(str, Enum):
    """Preferred or actual commitment term length for Savings Plans and related settings."""

    ONE_YEAR = "one_year"
    THREE_YEAR = "three_year"

    __str__ = str.__str__


CommitmentTermOrStr: TypeAlias = Annotated[CommitmentTerm | str, open_enum_validator(CommitmentTerm)]
