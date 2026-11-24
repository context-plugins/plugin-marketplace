from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PulseCreate(SdkBaseModel):
    eins: list[str]
    """Up to 200 EINs to watch. Any format — normalized per EIN."""

    name: Optional[str] = UNSET
    """A label for the digest header."""

    frequency: Optional[str] = UNSET
    """hourly | daily | weekly (default) | monthly."""

    checks: Optional[list[str]] = UNSET
    """Subset of: compliance, filings, grants, gov, people, web. Default all."""

    email_to: Optional[list[str]] = UNSET
    """Up to 5 addresses for digest delivery."""

    email_mode: Optional[str] = UNSET
    """activity (default: email only when something changed) | always."""

    unsubscribe_url: Optional[str] = UNSET
    """An https link the digest email carries for recipients to stop it."""


class PulseCreateDict(TypedDict):
    eins: list[str]
    name: NotRequired[str]
    frequency: NotRequired[str]
    checks: NotRequired[list[str]]
    email_to: NotRequired[list[str]]
    email_mode: NotRequired[str]
    unsubscribe_url: NotRequired[str]
