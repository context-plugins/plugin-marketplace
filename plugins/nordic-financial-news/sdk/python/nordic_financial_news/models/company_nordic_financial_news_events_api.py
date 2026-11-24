from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.association_tier_nordic_financial_news_events_api import AssociationTierNordicFinancialNewsEventsApiOrStr


class CompanyNordicFinancialNewsEventsApi(SdkBaseModel):
    id: str
    """Unique company identifier"""

    name: str
    """Company name"""

    ticker: OptionalNullable[str] = UNSET
    """Primary stock ticker"""

    is_primary: bool
    """Whether this company is the primary subject of the event"""

    association_tier: AssociationTierNordicFinancialNewsEventsApiOrStr
    """How the company relates to the event. ``principal`` (subject, acquirer, target, investor, issuer, partner) is the
    default set; ``peripheral`` (advisor, speaker, passing mention) appears only when ``include_peripheral=true``.
    Always present."""


class CompanyNordicFinancialNewsEventsApiDict(TypedDict):
    id: str
    name: str
    ticker: NotRequired[str | None]
    is_primary: bool
    association_tier: AssociationTierNordicFinancialNewsEventsApiOrStr
