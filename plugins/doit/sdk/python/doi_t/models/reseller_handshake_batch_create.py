from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .reseller_handshake_item import ResellerHandshakeItem, ResellerHandshakeItemDict


class ResellerHandshakeBatchCreate(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dpma_id: str = Field(alias="dpmaId")
    """The distributor's program management account (DPMA) ID issuing the handshakes."""

    send_handshakes: bool = Field(default=False, alias="sendHandshakes")
    """If ``true``, issues a new AWS Organizations handshake for each item without an existing one. If omitted or
    ``false``, maps the batch in place without issuing any AWS Organizations handshakes."""

    items: list[ResellerHandshakeItem]
    """Batch items. Duplicate ``resellerPmaAccountId`` values within the batch are rejected."""


class ResellerHandshakeBatchCreateDict(TypedDict):
    dpma_id: str
    send_handshakes: NotRequired[bool]
    items: list[ResellerHandshakeItemDict]
