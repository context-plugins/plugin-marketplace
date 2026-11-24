from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardDetails(SdkBaseModel):
    id: Optional[str] = UNSET
    """Card token identifier (card_*)."""

    entity: Optional[str] = UNSET
    name: Optional[str] = UNSET
    """Cardholder name."""

    last4: Optional[str] = UNSET
    """Last 4 digits of the card number."""

    network: Optional[str] = UNSET
    """Card network. Examples: Visa, MasterCard, RuPay, Amex."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Card type: credit or debit."""

    issuer: Optional[str] = UNSET
    """4-character code of the issuing bank."""

    emi: Optional[bool] = UNSET
    """Whether EMI is available on this card."""

    sub_type: Optional[str] = UNSET
    """Card sub-type (e.g. consumer, corporate)."""


class CardDetailsDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[str]
    name: NotRequired[str]
    last4: NotRequired[str]
    network: NotRequired[str]
    type_: NotRequired[str]
    issuer: NotRequired[str]
    emi: NotRequired[bool]
    sub_type: NotRequired[str]
