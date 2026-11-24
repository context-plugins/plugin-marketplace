from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ad import Ad, AdDict
from .aioverview import Aioverview, AioverviewDict
from .knowledge_graph import KnowledgeGraph, KnowledgeGraphDict
from .local_result import LocalResult, LocalResultDict
from .organic_result import OrganicResult, OrganicResultDict
from .people_also_ask import PeopleAlsoAsk, PeopleAlsoAskDict
from .people_are_saying import PeopleAreSaying, PeopleAreSayingDict
from .product_result import ProductResult, ProductResultDict
from .related_search import RelatedSearch, RelatedSearchDict
from .shopping_card3 import ShoppingCard3, ShoppingCard3Dict


class Result3(SdkBaseModel):
    """Google search results data"""

    organic_results: Optional[list[OrganicResult]] = Field(default=UNSET, alias="organicResults")
    """Organic search results from Google"""

    people_also_ask: Optional[list[PeopleAlsoAsk]] = Field(default=UNSET, alias="peopleAlsoAsk")
    """People Also Ask questions from Google"""

    people_are_saying: Optional[list[PeopleAreSaying]] = Field(default=UNSET, alias="peopleAreSaying")
    """Cards from Google's "What people are saying" / "Trending posts and discussions" SERP module. The field is omitted
    from ``result`` when no such module appears on the SERP, so clients should treat it as optional rather than
    expecting an empty array."""

    local_results: Optional[list[LocalResult]] = Field(default=UNSET, alias="localResults")
    """Places from Google's local pack (the map-backed "3-pack" of local businesses on local-intent queries, e.g. "best
    pizza in new york city"). The field is omitted from ``result`` when no local pack appears on the SERP, so clients
    should treat it as optional rather than expecting an empty array. Desktop only; mobile and the separate
    hotels/travel pack are not surfaced."""

    local_results_more_link: Optional[str] = Field(default=UNSET, alias="localResultsMoreLink")
    """Absolute URL of the local pack's "More places" / "More businesses" control — Google's expanded Local Finder for
    the query. Returned only alongside ``localResults`` when the SERP renders the control."""

    related_searches: Optional[list[RelatedSearch]] = Field(default=UNSET, alias="relatedSearches")
    """Related search suggestions"""

    ads: Optional[list[Ad]] = UNSET
    """Sponsored ad results from Google search, including text ads (``type: RESULT``) and shopping-style sponsored cards
    (``type: SHOPPING_CARD``) from the right-hand-side and top-of-page carousels."""

    aioverview: Optional[Aioverview] = UNSET
    """Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query."""

    shopping_cards: Optional[list[ShoppingCard3]] = Field(default=UNSET, alias="shoppingCards")
    """Shopping product cards extracted from the SERP's organic shopping grids ("Popular products" / "More products").
    The field is omitted from ``result`` when no shopping section is present, so clients should treat it as optional
    rather than expecting an empty array. Cards carry no product URL: they open a Google-side overlay rather than an
    external page."""

    knowledge_graph: Optional[KnowledgeGraph] = Field(default=UNSET, alias="knowledgeGraph")
    """Google's Knowledge Graph panel for the queried entity. Omitted from ``result`` when no Knowledge Graph panel
    appears on the SERP — treat it as optional rather than expecting null."""

    product_results: Optional[list[ProductResult]] = Field(default=UNSET, alias="productResults")
    """Merchant offers from the right-rail product panel. At most one entry, present only when Google shows the panel;
    no request flag needed. See `product results </api-reference/endpoint/google/product-results>`__."""

    html: Optional[list[str]] = UNSET
    """Raw HTML from Google search page (if requested)"""


class Result3Dict(TypedDict):
    organic_results: NotRequired[list[OrganicResultDict]]
    people_also_ask: NotRequired[list[PeopleAlsoAskDict]]
    people_are_saying: NotRequired[list[PeopleAreSayingDict]]
    local_results: NotRequired[list[LocalResultDict]]
    local_results_more_link: NotRequired[str]
    related_searches: NotRequired[list[RelatedSearchDict]]
    ads: NotRequired[list[AdDict]]
    aioverview: NotRequired[AioverviewDict]
    shopping_cards: NotRequired[list[ShoppingCard3Dict]]
    knowledge_graph: NotRequired[KnowledgeGraphDict]
    product_results: NotRequired[list[ProductResultDict]]
    html: NotRequired[list[str]]
