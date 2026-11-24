from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """The status of the high availability monitoring test. If a test hasn't been performed, the value of this field is
    null."""

    COMPLETE = "COMPLETE"
    FAILED = "FAILED"
    PENDING = "PENDING"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
