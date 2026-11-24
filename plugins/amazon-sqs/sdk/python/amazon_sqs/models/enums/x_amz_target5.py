from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5(str, Enum):
    AMAZON_SQS_CHANGE_MESSAGE_VISIBILITY = "AmazonSQS.ChangeMessageVisibility"

    __str__ = str.__str__


XAmzTarget5OrStr: TypeAlias = Annotated[XAmzTarget5 | str, open_enum_validator(XAmzTarget5)]
