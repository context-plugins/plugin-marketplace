from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DepartmentCompSniperMarketplaceAndShippingPoshmarkApi(str, Enum):
    """Poshmark department filter"""

    ALL = "all"
    WOMEN = "women"
    MEN = "men"
    KIDS = "kids"
    HOME = "home"
    PETS = "pets"
    ELECTRONICS = "electronics"

    __str__ = str.__str__


DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr: TypeAlias = Annotated[
    DepartmentCompSniperMarketplaceAndShippingPoshmarkApi | str,
    open_enum_validator(DepartmentCompSniperMarketplaceAndShippingPoshmarkApi),
]
