from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget9(str, Enum):
    AMAZON_SQS_SEND_MESSAGE_BATCH = "AmazonSQS.SendMessageBatch"

    __str__ = str.__str__


XAmzTarget9OrStr: TypeAlias = Annotated[XAmzTarget9 | str, open_enum_validator(XAmzTarget9)]
