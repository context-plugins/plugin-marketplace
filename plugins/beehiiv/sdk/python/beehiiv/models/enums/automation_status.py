from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomationStatus(str, Enum):
    RUNNING = "running"
    FINISHING = "finishing"
    INACTIVE = "inactive"
    LIVE = "live"
    DRAFT = "draft"

    __str__ = str.__str__


AutomationStatusOrStr: TypeAlias = Annotated[AutomationStatus | str, open_enum_validator(AutomationStatus)]
