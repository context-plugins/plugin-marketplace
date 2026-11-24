from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomationJourneysGetRequestStatus(str, Enum):
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    EXITED_EARLY = "exited_early"
    ALL = "all"

    __str__ = str.__str__


AutomationJourneysGetRequestStatusOrStr: TypeAlias = Annotated[
    AutomationJourneysGetRequestStatus | str, open_enum_validator(AutomationJourneysGetRequestStatus)
]
