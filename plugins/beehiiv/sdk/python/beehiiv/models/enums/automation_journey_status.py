from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomationJourneyStatus(str, Enum):
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    EXITED_EARLY = "exited_early"
    MANUALLY_REMOVED = "manually_removed"

    __str__ = str.__str__


AutomationJourneyStatusOrStr: TypeAlias = Annotated[
    AutomationJourneyStatus | str, open_enum_validator(AutomationJourneyStatus)
]
