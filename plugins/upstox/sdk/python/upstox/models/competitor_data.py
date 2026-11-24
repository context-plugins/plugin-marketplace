from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sector_market_cap_amount1 import SectorMarketCapAmount1, SectorMarketCapAmount1Dict
from .sector_market_cap_amount2 import SectorMarketCapAmount2, SectorMarketCapAmount2Dict


class CompetitorData(SdkBaseModel):
    company_profile: Optional[str] = UNSET
    """Business description of the company"""

    sector: Optional[str] = UNSET
    """Sector the company belongs to"""

    sector_market_cap_inr: Optional[SectorMarketCapAmount2] = UNSET
    """Sector market capitalisation in INR"""

    sector_market_cap_usd: Optional[SectorMarketCapAmount1] = UNSET
    """Sector market capitalisation in USD"""

    instrument_key: Optional[str] = UNSET
    """Instrument key of the competitor company"""


class CompetitorDataDict(TypedDict):
    company_profile: NotRequired[str]
    sector: NotRequired[str]
    sector_market_cap_inr: NotRequired[SectorMarketCapAmount2Dict]
    sector_market_cap_usd: NotRequired[SectorMarketCapAmount1Dict]
    instrument_key: NotRequired[str]
