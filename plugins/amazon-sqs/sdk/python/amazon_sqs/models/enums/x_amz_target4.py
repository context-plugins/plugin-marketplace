from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4(str, Enum):
    AMAZON_SQS_START_MESSAGE_MOVE_TASK = "AmazonSQS.StartMessageMoveTask"

    __str__ = str.__str__


XAmzTarget4OrStr: TypeAlias = Annotated[XAmzTarget4 | str, open_enum_validator(XAmzTarget4)]
