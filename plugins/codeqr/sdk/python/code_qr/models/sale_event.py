from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .click import Click, ClickDict
from .customer1 import Customer1, Customer1Dict
from .link import Link, LinkDict
from .sale import Sale, SaleDict


class SaleEvent(SdkBaseModel):
    event: Literal["sale"] = "sale"
    timestamp: Optional[str] = UNSET
    event_id: str = Field(alias="eventId")
    event_name: str = Field(alias="eventName")
    link: Link
    click: Click
    customer: Customer1
    sale: Sale
    sale_amount: float = Field(alias="saleAmount")
    """Deprecated. Use ``sale.amount`` instead."""

    invoice_id: str
    """Deprecated. Use ``sale.invoiceId`` instead."""

    payment_processor: str
    """Deprecated. Use ``sale.paymentProcessor`` instead."""

    metadata: str
    click_id: str
    """Deprecated. Use ``click.id`` instead."""

    link_id: str
    """Deprecated. Use ``link.id`` instead."""

    domain: str
    """Deprecated. Use ``link.domain`` instead."""

    key: str
    """Deprecated. Use ``link.key`` instead."""

    url: str
    """Deprecated. Use ``click.url`` instead."""

    continent: str
    """Deprecated. Use ``click.continent`` instead."""

    country: str
    """Deprecated. Use ``click.country`` instead."""

    city: str
    """Deprecated. Use ``click.city`` instead."""

    device: str
    """Deprecated. Use ``click.device`` instead."""

    browser: str
    """Deprecated. Use ``click.browser`` instead."""

    os: str
    """Deprecated. Use ``click.os`` instead."""

    type_: str = Field(alias="type")
    """Deprecated. Use ``click.qr`` instead."""

    ip: str
    """Deprecated. Use ``click.ip`` instead."""


class SaleEventDict(TypedDict):
    event: Literal["sale"]
    timestamp: NotRequired[str]
    event_id: str
    event_name: str
    link: LinkDict
    click: ClickDict
    customer: Customer1Dict
    sale: SaleDict
    sale_amount: float
    invoice_id: str
    payment_processor: str
    metadata: str
    click_id: str
    link_id: str
    domain: str
    key: str
    url: str
    continent: str
    country: str
    city: str
    device: str
    browser: str
    os: str
    type_: str
    ip: str
