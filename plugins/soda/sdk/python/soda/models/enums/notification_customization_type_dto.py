from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationCustomizationTypeDto(str, Enum):
    RICH = "rich"
    MINIMAL = "minimal"

    __str__ = str.__str__


NotificationCustomizationTypeDtoOrStr: TypeAlias = Annotated[
    NotificationCustomizationTypeDto | str, open_enum_validator(NotificationCustomizationTypeDto)
]
