from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role(str, Enum):
    """``independent`` counts toward the cluster. ``plan_like``: the buyer's fills all share an exact date-and-price
    pair with another buyer's (an allocation, an ESPP/DRIP lot), match another direct holder's lot at a round price, or
    the filing itself says the shares were not bought on the open market (then ``reason`` is set). ``unpriced``: no fill
    carries a price (units, exchanges). ``duplicate_of``: the same transaction another reporter already reported;
    ``duplicate_of`` names that reporter."""

    INDEPENDENT = "independent"
    PLAN_LIKE = "plan_like"
    UNPRICED = "unpriced"
    DUPLICATE_OF = "duplicate_of"

    __str__ = str.__str__


RoleOrStr: TypeAlias = Annotated[Role | str, open_enum_validator(Role)]
