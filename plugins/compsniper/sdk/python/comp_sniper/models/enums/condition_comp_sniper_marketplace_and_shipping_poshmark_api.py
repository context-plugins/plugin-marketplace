from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionCompSniperMarketplaceAndShippingPoshmarkApi(str, Enum):
    """Condition filter. 'nwt' = New With Tags only."""

    ALL = "all"
    NWT = "nwt"

    __str__ = str.__str__


ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr: TypeAlias = Annotated[
    ConditionCompSniperMarketplaceAndShippingPoshmarkApi | str,
    open_enum_validator(ConditionCompSniperMarketplaceAndShippingPoshmarkApi),
]
