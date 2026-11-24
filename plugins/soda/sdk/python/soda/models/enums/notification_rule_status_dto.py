from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationRuleStatusDto(str, Enum):
    ACTIVE = "active"
    PAUSED = "paused"

    __str__ = str.__str__


NotificationRuleStatusDtoOrStr: TypeAlias = Annotated[
    NotificationRuleStatusDto | str, open_enum_validator(NotificationRuleStatusDto)
]
