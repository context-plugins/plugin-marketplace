from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MessagingStatus(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    DISABLE_PENDING = "DISABLE_PENDING"

    __str__ = str.__str__


MessagingStatusOrStr: TypeAlias = Annotated[MessagingStatus | str, open_enum_validator(MessagingStatus)]
