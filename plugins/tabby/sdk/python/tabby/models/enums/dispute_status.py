from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisputeStatus(str, Enum):
    """The current status of the dispute:
      - ``new`` - dispute pending merchant approval for refund or initiate a challenge
      - ``declined`` - dispute was declined by Tabby support
      - ``cancelled`` - dispute was canceled by customer
      - ``refunded`` - dispute was approved or the order was refunded via Payments API
      - ``in_progress`` - merchant challenged dispute and need a response from Tabby support
      - ``evidence_merchant`` - waiting for evidence from the merchant
      - ``evidence_customer`` - waiting for evidence from the customer"""

    NEW = "new"
    DECLINED = "declined"
    CANCELLED = "cancelled"
    REFUNDED = "refunded"
    IN_PROGRESS = "in_progress"
    EVIDENCE_MERCHANT = "evidence_merchant"
    EVIDENCE_CUSTOMER = "evidence_customer"

    __str__ = str.__str__


DisputeStatusOrStr: TypeAlias = Annotated[DisputeStatus | str, open_enum_validator(DisputeStatus)]
