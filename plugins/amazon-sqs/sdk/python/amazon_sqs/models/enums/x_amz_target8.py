from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8(str, Enum):
    AMAZON_SQS_DELETE_MESSAGE_BATCH = "AmazonSQS.DeleteMessageBatch"

    __str__ = str.__str__


XAmzTarget8OrStr: TypeAlias = Annotated[XAmzTarget8 | str, open_enum_validator(XAmzTarget8)]
