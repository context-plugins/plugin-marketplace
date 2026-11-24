from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.kind import KindOrStr


class Dividend(SdkBaseModel):
    """Dividend lifecycle dates. ``null`` for non-dividend events. ``scheduled_at`` follows the priority ex-date >
    record-date > payment-date, whichever is explicitly stated."""

    ex_date: OptionalNullable[str] = UNSET
    """Ex-dividend date (YYYY-MM-DD). The market-event anchor: share price drops on this day."""

    record_date: OptionalNullable[str] = UNSET
    """Record date (YYYY-MM-DD). Holders of record on this date receive the dividend."""

    payment_date: OptionalNullable[str] = UNSET
    """Payment date (YYYY-MM-DD). When the cash is distributed to shareholders."""

    declaration_date: OptionalNullable[str] = UNSET
    """Declaration / announcement date (YYYY-MM-DD). Metadata only, never used as the calendar anchor."""

    kind: Optional[KindOrStr] = UNSET
    """Tranche type. ``ordinary`` for the recurring/regular dividend; ``special`` for an extra/bonus/one-off dividend.
    When an issuer proposes both for the same date, they are returned as two separate events."""


class DividendDict(TypedDict):
    ex_date: NotRequired[str | None]
    record_date: NotRequired[str | None]
    payment_date: NotRequired[str | None]
    declaration_date: NotRequired[str | None]
    kind: NotRequired[KindOrStr]
