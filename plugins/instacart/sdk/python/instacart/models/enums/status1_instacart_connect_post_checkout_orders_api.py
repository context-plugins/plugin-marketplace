from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1InstacartConnectPostCheckoutOrdersApi(str, Enum):
    """The current status of the item during shopping."""

    PENDING = "pending"
    FOUND = "found"
    REPLACED = "replaced"
    REFUNDED = "refunded"
    NOT_FOUND = "not_found"

    __str__ = str.__str__


Status1InstacartConnectPostCheckoutOrdersApiOrStr: TypeAlias = Annotated[
    Status1InstacartConnectPostCheckoutOrdersApi | str,
    open_enum_validator(Status1InstacartConnectPostCheckoutOrdersApi),
]
