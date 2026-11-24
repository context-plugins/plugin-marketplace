from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewsCategory(str, Enum):
    """``market_movers`` is for articles whose subject IS a notable price move ("AMD up 5% today"); ``sector_analysis``
    is genuine sector-level analysis; ``insider`` covers SEC Form 4 insider transactions only. SEC 8-K filings
    categorize by their primary item: an earnings release (Item 2.02) is ``earnings``, a completed acquisition or
    disposition (Item 2.01) is ``mergers_acquisitions``, and the remaining events (material agreements, debt, executive
    changes, annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures and other
    events under Items 7.01/8.01) are ``corporate_actions``. A foreign private issuer's SEC 6-K appears only when it is
    an earnings release (``source`` "SEC EDGAR 6-K") and is always ``earnings``."""

    EARNINGS = "earnings"
    MERGERS_ACQUISITIONS = "mergers_acquisitions"
    REGULATION = "regulation"
    MACRO_ECONOMY = "macro_economy"
    SECTOR_ANALYSIS = "sector_analysis"
    MARKET_MOVERS = "market_movers"
    TECHNOLOGY = "technology"
    COMMODITIES = "commodities"
    CRYPTO = "crypto"
    IPO = "ipo"
    GEOPOLITICS = "geopolitics"
    INSIDER = "insider"
    CORPORATE_ACTIONS = "corporate_actions"
    OTHER = "other"

    __str__ = str.__str__


NewsCategoryOrStr: TypeAlias = Annotated[NewsCategory | str, open_enum_validator(NewsCategory)]
