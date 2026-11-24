from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Resolution1(str, Enum):
    """Whether the anomaly was confirmed as real. Present only when ``reviewStatus`` is ``RESOLVED``."""

    ANOMALY_CONFIRMED = "ANOMALY_CONFIRMED"
    NOT_ANOMALY = "NOT_ANOMALY"

    __str__ = str.__str__


Resolution1OrStr: TypeAlias = Annotated[Resolution1 | str, open_enum_validator(Resolution1)]
