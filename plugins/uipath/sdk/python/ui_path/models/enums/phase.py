from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Phase(str, Enum):
    """Current phase of the automation in the pipeline"""

    IDEA = "Idea"
    ASSESSMENT = "Assessment"
    ANALYSIS = "Analysis"
    DEVELOPMENT = "Development"
    TESTING = "Testing"
    PRODUCTION = "Production"
    ON_HOLD = "OnHold"
    REJECTED = "Rejected"

    __str__ = str.__str__


PhaseOrStr: TypeAlias = Annotated[Phase | str, open_enum_validator(Phase)]
