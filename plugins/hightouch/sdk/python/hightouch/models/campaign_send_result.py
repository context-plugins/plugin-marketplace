from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr
from .enums.status import StatusOrStr


class CampaignSendResult(SdkBaseModel):
    """Per-recipient result returned synchronously after the trigger request. Accepted recipients are queued for
    delivery; check the send status endpoint for delivery confirmation."""

    model_config = ConfigDict(extra="forbid")

    handle: Optional[str] = UNSET
    """Delivery address of the recipient, present for inline (``handle``) recipients."""

    id: Optional[str] = UNSET
    """Primary key of the recipient as configured on the Personalization API sync, present for profile (``id``)
    recipients."""

    status: StatusOrStr
    """Whether this recipient was accepted for delivery or rejected at validation time."""

    send_id: Optional[str] = Field(default=UNSET, alias="sendId")
    """Unique identifier for this send, present when ``status`` is ``"accepted"``. Use with ``POST
    /campaigns/{id}/sends/batch-get`` to poll for delivery status; it accepts up to 100 ``sendId`` values per
    request."""

    reason: Optional[ReasonOrStr] = UNSET
    """Reason for rejection, present when ``status`` is ``"rejected"``.
    - ``invalid_handle`` — the delivery address is not a valid email or phone number
    - ``missing_variables`` — one or more required template variables are absent
      (``handle`` recipients only; ``id`` recipients are checked at send time)
    - ``invalid_id`` — the profile ID is empty or missing
    - ``missing_handle_or_id`` — the recipient has neither ``handle`` nor ``id``
    - ``invalid_locale`` — the ``locale`` is empty or longer than 7 characters
    - ``whatsapp_marketing_us_number`` — the message uses a marketing WhatsApp template, which Meta does not deliver to
        US phone numbers"""

    missing_variables: Optional[list[str]] = Field(default=UNSET, alias="missingVariables")
    """Names of the required template variables absent from the recipient's data, present when ``reason`` is
    ``"missing_variables"``."""


class CampaignSendResultDict(TypedDict):
    handle: NotRequired[str]
    id: NotRequired[str]
    status: StatusOrStr
    send_id: NotRequired[str]
    reason: NotRequired[ReasonOrStr]
    missing_variables: NotRequired[list[str]]
