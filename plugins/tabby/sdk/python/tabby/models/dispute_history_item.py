from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event_type import EventTypeOrStr
from .enums.source import SourceOrStr


class DisputeHistoryItem(SdkBaseModel):
    attachments: list[str]
    """Array of links to images which were uploaded by customer or merchant."""

    created_at: str
    """Date and time of creation of dispute history items, in UTC, and displayed in ISO 8601 datetime format."""

    created_by: str
    """Indicates the entity responsible for the creation of the record. It can take one of the following values:
      - If ``source`` is set to ``customer``, this field will contain the email address of the customer;
      - If ``source`` is set to ``merchant`` and the action was performed through the merchant-dashboard, then field
            will contain the email address of the dashboard user;
      - If ``source`` is set to ``merchant`` and the action was performed through the Disputes API, this field will
            contain the constant value 'Disputes API';
      - If ``source`` is set to ``tabby-support``, this field will be empty."""

    content: str
    """Contains additional information or comments related to the performed action. It can take one of the following
    values:
      - If ``source`` is set to ``customer``, this field will contain the customer's comment.
      - If ``source`` is set to ``merchant``, this field will contain the reason for the challenge.
      - If ``source`` is set to ``tabby-support``, this field will be empty."""

    source: SourceOrStr
    """This field specifies author that led to the creation of the record. It can take one of the following values:
      - ``customer``: Indicates that the action was initiated by a customer;
      - ``merchant``: Indicates that the action was initiated by a merchant;
      - ``tabby-support``: Indicates that the action was initiated by Tabby support."""

    event_type: EventTypeOrStr
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

    note: Optional[str] = UNSET
    """Contains additional message provided by merchant while perform action."""


class DisputeHistoryItemDict(TypedDict):
    attachments: list[str]
    created_at: str
    created_by: str
    content: str
    source: SourceOrStr
    event_type: EventTypeOrStr
    note: NotRequired[str]
