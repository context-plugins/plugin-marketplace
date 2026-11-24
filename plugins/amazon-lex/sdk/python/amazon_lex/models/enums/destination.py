from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Destination(str, Enum):
    """The destination where logs are delivered."""

    CLOUDWATCH_LOGS = "CLOUDWATCH_LOGS"
    S3 = "S3"

    __str__ = str.__str__


DestinationOrStr: TypeAlias = Annotated[Destination | str, open_enum_validator(Destination)]
