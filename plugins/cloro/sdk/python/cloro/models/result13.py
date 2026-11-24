from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ads3 import Ads3, Ads3Dict
from .aioverview4 import Aioverview4, Aioverview4Dict
from .knowledge_graph1 import KnowledgeGraph1, KnowledgeGraph1Dict
from .local_result1 import LocalResult1, LocalResult1Dict
from .organic_result1 import OrganicResult1, OrganicResult1Dict
from .people_also_ask1 import PeopleAlsoAsk1, PeopleAlsoAsk1Dict
from .people_are_saying1 import PeopleAreSaying1, PeopleAreSaying1Dict
from .product_result2 import ProductResult2, ProductResult2Dict
from .recipe import Recipe, RecipeDict
from .related_search import RelatedSearch, RelatedSearchDict
from .shopping_card6 import ShoppingCard6, ShoppingCard6Dict


class Result13(SdkBaseModel):
    """Google search results data"""

    organic_results: Optional[list[OrganicResult1]] = Field(default=UNSET, alias="organicResults")
    """Organic search results from Google"""

    people_also_ask: Optional[list[PeopleAlsoAsk1]] = Field(default=UNSET, alias="peopleAlsoAsk")
    """People Also Ask questions from Google"""

    people_are_saying: Optional[list[PeopleAreSaying1]] = Field(default=UNSET, alias="peopleAreSaying")
    """Cards from Google's "What people are saying" / "Trending posts and discussions" SERP module. The field is omitted
    from ``result`` when no such module appears on the SERP, so clients should treat it as optional rather than
    expecting an empty array."""

    recipes: Optional[list[Recipe]] = UNSET
    """Cards from Google's Recipes carousel, on desktop and mobile. Only the cards in the page as first loaded are
    returned. The field is omitted from ``result`` when no Recipes carousel appears on the SERP, so clients should treat
    it as optional rather than expecting an empty array."""

    local_results: Optional[list[LocalResult1]] = Field(default=UNSET, alias="localResults")
    """Places from Google's local pack (the map-backed "3-pack" of local businesses on local-intent queries, e.g. "best
    pizza in new york city"). The field is omitted from ``result`` when no local pack appears on the SERP, so clients
    should treat it as optional rather than expecting an empty array. Returned on desktop and mobile. Google's separate
    hotels/travel pack is not surfaced."""

    local_results_more_link: Optional[str] = Field(default=UNSET, alias="localResultsMoreLink")
    """Absolute URL of the local pack's "More places" / "More businesses" control — Google's expanded Local Finder for
    the query. Returned only alongside ``localResults`` when the SERP renders the control."""

    related_searches: Optional[list[RelatedSearch]] = Field(default=UNSET, alias="relatedSearches")
    """Related search suggestions"""

    ads: Optional[list[Ads3]] = UNSET
    """Sponsored ad results from Google search, including text ads (``type: RESULT``) and shopping-style sponsored cards
    (``type: SHOPPING_CARD``) from the right-hand-side and top-of-page carousels."""

    aioverview: Optional[Aioverview4] = UNSET
    """Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query."""

    shopping_cards: Optional[list[ShoppingCard6]] = Field(default=UNSET, alias="shoppingCards")
    """Shopping product cards extracted from the SERP's organic shopping grids ("Popular products" / "More products").
    The field is omitted from ``result`` when no shopping section is present, so clients should treat it as optional
    rather than expecting an empty array. Cards carry no product URL: they open a Google-side overlay rather than an
    external page."""

    knowledge_graph: Optional[KnowledgeGraph1] = Field(default=UNSET, alias="knowledgeGraph")
    """Google's Knowledge Graph panel for the queried entity. Omitted from ``result`` when no Knowledge Graph panel
    appears on the SERP — treat it as optional rather than expecting null."""

    product_results: Optional[list[ProductResult2]] = Field(default=UNSET, alias="productResults")
    """Merchant offers from the right-rail product panel. At most one entry, present only when Google shows the panel;
    no request flag needed. See `product results </api-reference/endpoint/google/product-results>`__."""

    html: Optional[list[str]] = UNSET
    """Raw HTML from Google search page (if requested)"""


class Result13Dict(TypedDict):
    organic_results: NotRequired[list[OrganicResult1Dict]]
    people_also_ask: NotRequired[list[PeopleAlsoAsk1Dict]]
    people_are_saying: NotRequired[list[PeopleAreSaying1Dict]]
    recipes: NotRequired[list[RecipeDict]]
    local_results: NotRequired[list[LocalResult1Dict]]
    local_results_more_link: NotRequired[str]
    related_searches: NotRequired[list[RelatedSearchDict]]
    ads: NotRequired[list[Ads3Dict]]
    aioverview: NotRequired[Aioverview4Dict]
    shopping_cards: NotRequired[list[ShoppingCard6Dict]]
    knowledge_graph: NotRequired[KnowledgeGraph1Dict]
    product_results: NotRequired[list[ProductResult2Dict]]
    html: NotRequired[list[str]]
