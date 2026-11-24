from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """The current status of the S3 build logs. Valid values are: ENABLED: S3 build logs are enabled for this build
    project. DISABLED: S3 build logs are not enabled for this build project."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
