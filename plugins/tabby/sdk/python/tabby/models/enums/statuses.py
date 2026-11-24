from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Statuses(str, Enum):
    NEW = "new"
    DECLINED = "declined"
    CANCELLED = "cancelled"
    REFUNDED = "refunded"
    IN_PROGRESS = "in_progress"
    EVIDENCE_MERCHANT = "evidence_merchant"
    EVIDENCE_CUSTOMER = "evidence_customer"

    __str__ = str.__str__


StatusesOrStr: TypeAlias = Annotated[Statuses | str, open_enum_validator(Statuses)]
