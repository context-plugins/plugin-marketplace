from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskDeliverdDevTasksApi(str, Enum):
    """low, medium, high or critical. Never lower than the AI system's own"""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


RiskDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    RiskDeliverdDevTasksApi | str, open_enum_validator(RiskDeliverdDevTasksApi)
]
