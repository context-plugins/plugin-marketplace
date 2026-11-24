from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Resolution(str, Enum):
    """Required when ``reviewStatus`` is ``RESOLVED``; forbidden otherwise. Qualifies whether the anomaly was confirmed
    as real."""

    ANOMALY_CONFIRMED = "ANOMALY_CONFIRMED"
    NOT_ANOMALY = "NOT_ANOMALY"

    __str__ = str.__str__


ResolutionOrStr: TypeAlias = Annotated[Resolution | str, open_enum_validator(Resolution)]
