from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisputeReason(str, Enum):
    """Cause of the dispute was created (selected by customer). There are only four reasons:
      - ``unreceived_refund`` - a refund not received
      - ``identity_theft`` - I did not place this order (also known as identity theft)
      - ``product_issue`` - there was a problem with the product
      - ``not_delivered`` - the order was not delivered"""

    UNRECEIVED_REFUND = "unreceived_refund"
    IDENTITY_THEFT = "identity_theft"
    PRODUCT_ISSUE = "product_issue"
    NOT_DELIVERED = "not_delivered"

    __str__ = str.__str__


DisputeReasonOrStr: TypeAlias = Annotated[DisputeReason | str, open_enum_validator(DisputeReason)]
