from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MetricFilterText(str, Enum):
    """Text/operator used to filter metric values in metric filters (gt = greater than, lt = less than)."""

    GT = "gt"
    LT = "lt"

    __str__ = str.__str__


MetricFilterTextOrStr: TypeAlias = Annotated[MetricFilterText | str, open_enum_validator(MetricFilterText)]
