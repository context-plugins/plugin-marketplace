from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Phase4(str, Enum):
    """``started`` claims a use before you act; ``completed`` or ``failed`` reports the outcome. Reporting ``completed``
    without a ``claimId`` claims and reports in one"""

    STARTED = "started"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


Phase4OrStr: TypeAlias = Annotated[Phase4 | str, open_enum_validator(Phase4)]
