from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .recipient import Recipient, RecipientDict
from .reply_to import ReplyTo, ReplyToDict


class SendInvoiceRequestDto(SdkBaseModel):
    """Send an invoice to a customer"""

    reply_to: ReplyTo = Field(alias="replyTo")
    recipient: Recipient


class SendInvoiceRequestDtoDict(TypedDict):
    reply_to: ReplyToDict
    recipient: RecipientDict
