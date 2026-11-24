from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Clixexternalv1DeliveryResultStatus(str, Enum):
    DELIVERY_RESULT_STATUS_SUCCEED = "DELIVERY_RESULT_STATUS_SUCCEED"
    DELIVERY_RESULT_STATUS_FAILED = "DELIVERY_RESULT_STATUS_FAILED"

    __str__ = str.__str__


Clixexternalv1DeliveryResultStatusOrStr: TypeAlias = Annotated[
    Clixexternalv1DeliveryResultStatus | str, open_enum_validator(Clixexternalv1DeliveryResultStatus)
]
