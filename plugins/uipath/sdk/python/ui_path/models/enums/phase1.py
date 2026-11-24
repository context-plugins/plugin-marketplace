from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Phase1(str, Enum):
    """Updated pipeline phase for the automation"""

    IDEA = "Idea"
    ASSESSMENT = "Assessment"
    ANALYSIS = "Analysis"
    DEVELOPMENT = "Development"
    TESTING = "Testing"
    PRODUCTION = "Production"
    ON_HOLD = "OnHold"
    REJECTED = "Rejected"

    __str__ = str.__str__


Phase1OrStr: TypeAlias = Annotated[Phase1 | str, open_enum_validator(Phase1)]
