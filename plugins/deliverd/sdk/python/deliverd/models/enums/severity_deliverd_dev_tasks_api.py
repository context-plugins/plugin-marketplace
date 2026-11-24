from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityDeliverdDevTasksApi(str, Enum):
    """How serious a failure of this result is: low, medium, high or critical"""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


SeverityDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    SeverityDeliverdDevTasksApi | str, open_enum_validator(SeverityDeliverdDevTasksApi)
]
