from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskCategory(str, Enum):
    """What kind of harm this risks"""

    FINANCIAL = "financial"
    DATA = "data"
    COMMUNICATION = "communication"
    INFRASTRUCTURE = "infrastructure"
    IDENTITY = "identity"
    OTHER = "other"

    __str__ = str.__str__


RiskCategoryOrStr: TypeAlias = Annotated[RiskCategory | str, open_enum_validator(RiskCategory)]
