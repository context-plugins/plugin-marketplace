from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Statistic4(str, Enum):
    """The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The
    total count divided by the number of sessions in the category you provide in name. Max – The highest count in the
    category you provide in name."""

    SUM = "Sum"
    AVG = "Avg"
    MAX = "Max"

    __str__ = str.__str__


Statistic4OrStr: TypeAlias = Annotated[Statistic4 | str, open_enum_validator(Statistic4)]
