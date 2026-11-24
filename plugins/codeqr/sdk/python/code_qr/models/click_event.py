from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .click import Click, ClickDict
from .link import Link, LinkDict


class ClickEvent(SdkBaseModel):
    event: Literal["click"] = "click"
    timestamp: Optional[str] = UNSET
    click: Click
    link: Link
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


class ClickEventDict(TypedDict):
    event: Literal["click"]
    timestamp: NotRequired[str]
    click: ClickDict
    link: LinkDict
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
