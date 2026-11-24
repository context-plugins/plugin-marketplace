from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Clixexternalv1DeliveryResultStatus2(str, Enum):
    """Delivery status of the push notification."""

    DELIVERY_RESULT_STATUS_SUCCEED = "DELIVERY_RESULT_STATUS_SUCCEED"
    DELIVERY_RESULT_STATUS_FAILED = "DELIVERY_RESULT_STATUS_FAILED"

    __str__ = str.__str__


Clixexternalv1DeliveryResultStatus2OrStr: TypeAlias = Annotated[
    Clixexternalv1DeliveryResultStatus2 | str, open_enum_validator(Clixexternalv1DeliveryResultStatus2)
]
