from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskDeliverdDevApprovalsApi(str, Enum):
    """How the approver should weigh it; medium when omitted"""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


RiskDeliverdDevApprovalsApiOrStr: TypeAlias = Annotated[
    RiskDeliverdDevApprovalsApi | str, open_enum_validator(RiskDeliverdDevApprovalsApi)
]
