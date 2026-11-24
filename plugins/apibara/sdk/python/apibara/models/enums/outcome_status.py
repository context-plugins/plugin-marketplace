from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OutcomeStatus(str, Enum):
    """Explicit normalized outcome only; elapsed time alone is not treated as a sale."""

    SOLD = "Sold"
    SOLD_ON_APPROVAL = "Sold on Approval"
    NOT_SOLD = "Not Sold"
    REMOVED = "Removed"

    __str__ = str.__str__


OutcomeStatusOrStr: TypeAlias = Annotated[OutcomeStatus | str, open_enum_validator(OutcomeStatus)]
