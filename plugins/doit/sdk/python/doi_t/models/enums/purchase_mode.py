from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PurchaseMode(str, Enum):
    """Whether purchases execute automatically or require customer approval before the planner proceeds. Configured in
    the DoiT Console Settings tab; this settings API is read-only."""

    AUTONOMOUS = "autonomous"
    REQUIRES_APPROVAL = "requires_approval"

    __str__ = str.__str__


PurchaseModeOrStr: TypeAlias = Annotated[PurchaseMode | str, open_enum_validator(PurchaseMode)]
