from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ai_trading_insights import AiTradingInsights, AiTradingInsightsDict
from .enums.news_category import NewsCategoryOrStr
from .news_context_enhancement import NewsContextEnhancement, NewsContextEnhancementDict


class EnrichedArticle(SdkBaseModel):
    category: Optional[NewsCategoryOrStr] = UNSET
    """``market_movers`` is for articles whose subject IS a notable price move ("AMD up 5% today"); ``sector_analysis``
    is genuine sector-level analysis; ``insider`` covers SEC Form 4 insider transactions only. SEC 8-K filings
    categorize by their primary item: an earnings release (Item 2.02) is ``earnings``, a completed acquisition or
    disposition (Item 2.01) is ``mergers_acquisitions``, and the remaining events (material agreements, debt, executive
    changes, annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures and other
    events under Items 7.01/8.01) are ``corporate_actions``. A foreign private issuer's SEC 6-K appears only when it is
    an earnings release (``source`` "SEC EDGAR 6-K") and is always ``earnings``."""

    tickers: Optional[list[str]] = UNSET
    """Validated tickers the article mentions — only symbols present in ``/api/symbols/`` survive enrichment-time
    verification against the article text. Mirrors ``ai_trading_insights.ticker_analysis[].ticker``."""

    relevance_score: Optional[int] = UNSET
    """How much trading value the article itself carries (rates the article, not the company; deterministic — same
    article, same score): 1–2 no trading relevance · 3–4 derivative content about already-known events · 5–6
    macro/sector datapoints, minor-but-real company news · 7–8 real company news with a fresh catalyst · 9–10 primary,
    material, newly disclosed. SEC Form 4 rows are scored from the transaction itself (size, buy vs. sell, 10b5-1 plan
    or not) rather than by the model; a sale tops out at 6."""

    ai_trading_insights: Optional[AiTradingInsights] = UNSET
    news_context_enhancement: Optional[NewsContextEnhancement] = UNSET


class EnrichedArticleDict(TypedDict):
    category: NotRequired[NewsCategoryOrStr]
    tickers: NotRequired[list[str]]
    relevance_score: NotRequired[int]
    ai_trading_insights: NotRequired[AiTradingInsightsDict]
    news_context_enhancement: NotRequired[NewsContextEnhancementDict]
