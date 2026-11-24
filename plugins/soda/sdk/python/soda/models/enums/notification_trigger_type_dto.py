from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationTriggerTypeDto(str, Enum):
    TEST_RESULT_LEVEL = "testResultLevel"
    SCAN_STATE = "scanState"

    __str__ = str.__str__


NotificationTriggerTypeDtoOrStr: TypeAlias = Annotated[
    NotificationTriggerTypeDto | str, open_enum_validator(NotificationTriggerTypeDto)
]
