from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InterestPaymentDue(str, Enum):
    """When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the
    rate that can be offered."""

    IN_ADVANCE = "IN_ADVANCE"
    IN_ARREARS = "IN_ARREARS"

    __str__ = str.__str__


InterestPaymentDueOrStr: TypeAlias = Annotated[InterestPaymentDue | str, open_enum_validator(InterestPaymentDue)]
