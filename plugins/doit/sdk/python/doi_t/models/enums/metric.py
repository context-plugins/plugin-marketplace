from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Metric(str, Enum):
    """Budget metric"""

    COST = "cost"
    AMORTIZED_COST = "amortized_cost"

    __str__ = str.__str__


MetricOrStr: TypeAlias = Annotated[Metric | str, open_enum_validator(Metric)]
