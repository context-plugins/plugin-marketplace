from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """The status of the pull request."""

    CREATED = "CREATED"
    IN_REVIEW = "IN_REVIEW"
    MERGED = "MERGED"
    REJECTED = "REJECTED"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
