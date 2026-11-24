from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DefaultRisk(str, Enum):
    """The urgency an approval inherits when the caller declares none"""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


DefaultRiskOrStr: TypeAlias = Annotated[DefaultRisk | str, open_enum_validator(DefaultRisk)]
