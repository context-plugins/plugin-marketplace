from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType(str, Enum):
    """The event type of the dispute history item:
      - ``dispute_created`` - the customer raised a dispute;
      - ``dispute_approved`` - disputed was approved and amount was refunded to customer;
      - ``dispute_declined`` - dispute was declined by Tabby support;
      - ``dispute_canceled`` - dispute was canceled by customer;
      - ``dispute_in_arbitration`` - merchant challenged dispute (e.g incorrect amount);
      - ``dispute_amount_changed`` - disputed amount was changed;
      - ``dispute_comment_added`` - merchant added comment to the dispute;
      - ``evidence_merchant`` - agent requested evidence from the merchant;
      - ``evidence_customer`` - agent requested evidence from the customer;
      - ``evidence_merchant_provided`` - merchant provided evidence;
      - ``evidence_customer_provided`` - customer provided evidence;
      - ``merchant_14d_unresponsive`` - merchant did not respond within 14 days;
      - ``customer_14d_unresponsive`` - customer did not respond within 14 days."""

    DISPUTE_CREATED = "dispute_created"
    DISPUTE_APPROVED = "dispute_approved"
    DISPUTE_DECLINED = "dispute_declined"
    DISPUTE_CANCELED = "dispute_canceled"
    DISPUTE_IN_ARBITRATION = "dispute_in_arbitration"
    DISPUTE_AMOUNT_CHANGED = "dispute_amount_changed"
    DISPUTE_COMMENT_ADDED = "dispute_comment_added"
    EVIDENCE_MERCHANT = "evidence_merchant"
    EVIDENCE_CUSTOMER = "evidence_customer"
    EVIDENCE_MERCHANT_PROVIDED = "evidence_merchant_provided"
    EVIDENCE_CUSTOMER_PROVIDED = "evidence_customer_provided"
    MERCHANT_14D_UNRESPONSIVE = "merchant_14d_unresponsive"
    CUSTOMER_14D_UNRESPONSIVE = "customer_14d_unresponsive"

    __str__ = str.__str__


EventTypeOrStr: TypeAlias = Annotated[EventType | str, open_enum_validator(EventType)]
