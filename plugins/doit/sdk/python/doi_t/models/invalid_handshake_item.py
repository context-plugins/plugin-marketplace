from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidHandshakeItem(SdkBaseModel):
    """A single batch item that failed validation before processing began."""

    model_config = ConfigDict(extra="forbid")

    index: int
    """Zero-based position of the invalid item within the submitted batch."""

    reseller_customer_id: Optional[str] = Field(default=UNSET, alias="resellerCustomerId")
    """Present when the invalid item is a reseller-handshake batch item."""

    code: str
    """Stable machine-readable error code (e.g. ``duplicate_pma``, ``duplicate_ec_account``)."""

    reason: Optional[str] = UNSET
    """Human-readable explanation of why the item is invalid."""


class InvalidHandshakeItemDict(TypedDict):
    index: int
    reseller_customer_id: NotRequired[str]
    code: str
    reason: NotRequired[str]
