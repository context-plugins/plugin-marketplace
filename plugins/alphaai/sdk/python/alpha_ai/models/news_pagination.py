from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .rich_news_article import RichNewsArticle, RichNewsArticleDict


class NewsPagination(SdkBaseModel):
    results: list[RichNewsArticle]
    next_cursor: str | None
    """Opaque cursor for the next page. Pass it back as ``?cursor=`` with the same ``sort`` mode. Default
    (``sort=published``) feed: the next older page, ``null`` when the end of the feed has been reached. Delta mode
    (``sort=ingested``): always non-null — it is your polling position; empty ``results`` means caught up, keep the
    cursor and poll again later."""

    symbol_note: OptionalNullable[str] = UNSET
    """Crypto-collider hint, set only when ``symbol`` named a string a stock/ETF owns while an active cryptocurrency
    answers to the same base (crypto is addressed as ``<SYM>-USD``, so ``BTC`` is the Grayscale ETF and ``BTC-USD`` the
    coin). One sentence naming the coin ticker to request; ``null`` for every other query. The page itself still serves
    the equity's feed — the string keeps its equity meaning."""


class NewsPaginationDict(TypedDict):
    results: list[RichNewsArticleDict]
    next_cursor: str | None
    symbol_note: NotRequired[str | None]
