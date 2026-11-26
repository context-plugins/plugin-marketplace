from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessCategoryResponse(str, Enum):
    """Business Category."""

    UNDEFINED = "UNDEFINED"
    CORPORATION = "CORPORATION"
    LLC = "LLC"
    NON_PROFIT = "NON_PROFIT"
    GOVERNMENT = "GOVERNMENT"
    SOLE_PROPRIETOR = "SOLE_PROPRIETOR"
    INDIVIDUAL = "INDIVIDUAL"
    TRUST = "TRUST"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


BusinessCategoryResponseOrStr: TypeAlias = Annotated[
    BusinessCategoryResponse | str, open_enum_validator(BusinessCategoryResponse)
]
