from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Destination1(str, Enum):
    """Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio logs are
    delivered to an S3 bucket."""

    CLOUDWATCH_LOGS = "CLOUDWATCH_LOGS"
    S3 = "S3"

    __str__ = str.__str__


Destination1OrStr: TypeAlias = Annotated[Destination1 | str, open_enum_validator(Destination1)]
