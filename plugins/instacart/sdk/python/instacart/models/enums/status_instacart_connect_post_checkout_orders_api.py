from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusInstacartConnectPostCheckoutOrdersApi(str, Enum):
    """The current status of the order."""

    BRAND_NEW = "brand_new"
    ACKNOWLEDGED = "acknowledged"
    PICKING = "picking"
    STAGING = "staging"
    DELIVERING = "delivering"
    DELIVERED = "delivered"
    CANCELED = "canceled"

    __str__ = str.__str__


StatusInstacartConnectPostCheckoutOrdersApiOrStr: TypeAlias = Annotated[
    StatusInstacartConnectPostCheckoutOrdersApi | str, open_enum_validator(StatusInstacartConnectPostCheckoutOrdersApi)
]
