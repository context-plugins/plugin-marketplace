from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class CompanyNordicFinancialNewsCalendarEventsApi(SdkBaseModel):
    """The issuer this event belongs to, inlined so a calendar can be rendered without a lookup per row. ``id`` is the
    same value as ``company_id``. ``null`` only when the issuer is not published by this API."""

    id: Optional[str] = UNSET
    """Unique company identifier"""

    name: Optional[str] = UNSET
    """Company name"""

    ticker: OptionalNullable[str] = UNSET
    """Primary stock ticker. ``null`` for an unlisted issuer."""


class CompanyNordicFinancialNewsCalendarEventsApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    ticker: NotRequired[str | None]
