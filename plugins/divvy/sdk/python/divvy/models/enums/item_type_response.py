from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ItemTypeResponse(str, Enum):
    """Item type response."""

    UNDEFINED = "UNDEFINED"
    UNKNOWN = "UNKNOWN"
    SERVICE = "SERVICE"
    INVENTORY = "INVENTORY"
    NON_INVENTORY = "NON_INVENTORY"
    PAYMENT = "PAYMENT"
    DISCOUNT = "DISCOUNT"
    SALES_TAX = "SALES_TAX"
    SUBTOTAL = "SUBTOTAL"
    OTHER_CHARGE = "OTHER_CHARGE"
    INVENTORY_ASSEMBLY = "INVENTORY_ASSEMBLY"
    GROUP = "GROUP"
    SALES_TAX_GROUP = "SALES_TAX_GROUP"
    FIXED_ASSET = "FIXED_ASSET"
    CATEGORY = "CATEGORY"
    EXPENSE = "EXPENSE"

    __str__ = str.__str__


ItemTypeResponseOrStr: TypeAlias = Annotated[ItemTypeResponse | str, open_enum_validator(ItemTypeResponse)]
