from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DecisionImpact(str, Enum):
    """What its output feeds into"""

    NONE = "none"
    INFORMS = "informs"
    SUPPORTS_DECISION = "supports_decision"
    AUTOMATED_DECISION = "automated_decision"

    __str__ = str.__str__


DecisionImpactOrStr: TypeAlias = Annotated[DecisionImpact | str, open_enum_validator(DecisionImpact)]
