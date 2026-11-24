from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessCategoryRequest(str, Enum):
    """Business Category."""

    CORPORATION = "CORPORATION"
    LLC = "LLC"
    NON_PROFIT = "NON_PROFIT"
    GOVERNMENT = "GOVERNMENT"
    SOLE_PROPRIETOR = "SOLE_PROPRIETOR"
    INDIVIDUAL = "INDIVIDUAL"
    TRUST = "TRUST"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


BusinessCategoryRequestOrStr: TypeAlias = Annotated[
    BusinessCategoryRequest | str, open_enum_validator(BusinessCategoryRequest)
]
