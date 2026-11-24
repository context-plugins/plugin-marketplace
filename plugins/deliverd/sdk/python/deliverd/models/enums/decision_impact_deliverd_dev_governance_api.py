from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DecisionImpactDeliverdDevGovernanceApi(str, Enum):
    NONE = "none"
    INFORMS = "informs"
    SUPPORTS_DECISION = "supports_decision"
    AUTOMATED_DECISION = "automated_decision"

    __str__ = str.__str__


DecisionImpactDeliverdDevGovernanceApiOrStr: TypeAlias = Annotated[
    DecisionImpactDeliverdDevGovernanceApi | str, open_enum_validator(DecisionImpactDeliverdDevGovernanceApi)
]
