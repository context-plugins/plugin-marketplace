from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskCategory1(str, Enum):
    FINANCIAL = "financial"
    DATA = "data"
    COMMUNICATION = "communication"
    INFRASTRUCTURE = "infrastructure"
    IDENTITY = "identity"
    OTHER = "other"

    __str__ = str.__str__


RiskCategory1OrStr: TypeAlias = Annotated[RiskCategory1 | str, open_enum_validator(RiskCategory1)]
