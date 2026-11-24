from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTBillingTransferApi(str, Enum):
    HANDSHAKE_PENDING = "handshake_pending"
    CUR_EXPORT_WAITING = "cur_export_waiting"
    ACTIVE = "active"
    DECLINED = "declined"
    CANCELED = "canceled"
    EXPIRED = "expired"

    __str__ = str.__str__


StatusDoiTBillingTransferApiOrStr: TypeAlias = Annotated[
    StatusDoiTBillingTransferApi | str, open_enum_validator(StatusDoiTBillingTransferApi)
]
