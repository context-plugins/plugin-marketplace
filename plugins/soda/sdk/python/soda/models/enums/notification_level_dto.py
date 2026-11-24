from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationLevelDto(str, Enum):
    INFO = "info"
    WARNING = "warning"
    CRITICAL = "critical"
    NOT_EVALUATED = "not_evaluated"

    __str__ = str.__str__


NotificationLevelDtoOrStr: TypeAlias = Annotated[NotificationLevelDto | str, open_enum_validator(NotificationLevelDto)]
