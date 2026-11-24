from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.source_type_nordic_financial_news_sources_api import SourceTypeNordicFinancialNewsSourcesApiOrStr


class SourceSummary(SdkBaseModel):
    id: str
    """Unique source identifier"""

    name: str
    """Source display name"""

    domain: str
    """Primary domain of the source"""

    country: OptionalNullable[str] = UNSET
    """Country code (ISO 3166-1 alpha-2)"""

    source_type: SourceTypeNordicFinancialNewsSourcesApiOrStr
    """Source type"""


class SourceSummaryDict(TypedDict):
    id: str
    name: str
    domain: str
    country: NotRequired[str | None]
    source_type: SourceTypeNordicFinancialNewsSourcesApiOrStr
