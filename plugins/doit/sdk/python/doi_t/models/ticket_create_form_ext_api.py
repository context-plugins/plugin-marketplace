from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ticket_ext_api import TicketExtApi, TicketExtApiDict


class TicketCreateFormExtApi(SdkBaseModel):
    """Wrapper object for creating support tickets via the external API."""

    ticket: TicketExtApi
    """Payload to create a support ticket via API."""


class TicketCreateFormExtApiDict(TypedDict):
    ticket: TicketExtApiDict
