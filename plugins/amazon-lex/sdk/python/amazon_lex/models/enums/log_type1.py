from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogType1(str, Enum):
    """The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered
    to an S3 bucket."""

    AUDIO = "AUDIO"
    TEXT = "TEXT"

    __str__ = str.__str__


LogType1OrStr: TypeAlias = Annotated[LogType1 | str, open_enum_validator(LogType1)]
