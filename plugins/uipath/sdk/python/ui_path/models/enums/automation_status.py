from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomationStatus(str, Enum):
    """Whether the test case is linked to an automated robot process"""

    NOT_AUTOMATED = "NotAutomated"
    AUTOMATED = "Automated"

    __str__ = str.__str__


AutomationStatusOrStr: TypeAlias = Annotated[AutomationStatus | str, open_enum_validator(AutomationStatus)]
