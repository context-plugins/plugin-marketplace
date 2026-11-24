from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .ads2 import Ads2, Ads2Dict
from .citation_pill5 import CitationPill5, CitationPill5Dict
from .entity1 import Entity1, Entity1Dict
from .follow_up_form import FollowUpForm, FollowUpFormDict
from .inline_product2 import InlineProduct2, InlineProduct2Dict
from .map1 import Map1, Map1Dict
from .raw_response import RawResponse, RawResponseDict
from .shopping_card5 import ShoppingCard5, ShoppingCard5Dict
from .source12 import Source12, Source12Dict


class ChatGptResult(SdkBaseModel):
    """ChatGPT's response to one prompt"""

    text: Optional[str] = UNSET
    """ChatGPT's response text"""

    sources: Optional[list[Source12]] = UNSET
    """Array of sources referenced in the response. Returns empty array when no sources are available."""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the response (included when include.html is true)"""

    markdown: Optional[str] = UNSET
    """ChatGPT's response formatted in Markdown (included when include.markdown is true)"""

    raw_response: Optional[list[RawResponse]] = Field(default=UNSET, alias="rawResponse")
    """Array of streaming events returned by ChatGPT (included when include.rawResponse is true). With
    ``include.shopping`` on as well, it includes the ``product_update`` events fetched for each inline product and
    shopping-card product."""

    search_queries: Optional[list[str]] = Field(default=UNSET, alias="searchQueries")
    """Array of query fan-out ChatGPT used to generate the response (included when include.searchQueries is true)"""

    map_search_queries: Optional[list[str]] = Field(default=UNSET, alias="mapSearchQueries")
    """Queries ChatGPT sent to its maps tool to build the ``map`` entries, deduplicated in first-seen order (included
    when include.searchQueries is true). Distinct from ``searchQueries``, the web-search fan-out. Empty on responses
    served through OpenAI's mobile-web format; see ``legacy``."""

    model: OptionalNullable[str] = UNSET
    """The ChatGPT model used to generate the response. Empty on responses served through OpenAI's mobile-web format."""

    shopping_cards: Optional[list[ShoppingCard5]] = Field(default=UNSET, alias="shoppingCards")
    """Array of shopping/product cards extracted from the response. The field is omitted entirely from ``result`` when
    ``include.shopping`` is ``false`` or unset — clients should treat it as optional rather than expecting an empty
    array."""

    inline_products: Optional[list[InlineProduct2]] = Field(default=UNSET, alias="inlineProducts")
    """Array of inline products with pricing and offers. The field is omitted entirely from ``result`` when
    ``include.shopping`` is ``false`` or unset — clients should treat it as optional rather than expecting an empty
    array."""

    entities: Optional[list[Entity1]] = UNSET
    """Array of entities extracted from the response (when available)"""

    map: Optional[list[Map1]] = UNSET
    """Array of business/place map entries extracted from the response (when available). Items come from ChatGPT's
    enriched providers (Yelp, Google Business) and use camelCase field names. The full field set is documented at
    /api-reference/endpoint/chatgpt/map; only the most commonly populated fields are listed here."""

    citation_pills: Optional[list[CitationPill5]] = Field(default=UNSET, alias="citationPills")
    """Array of inline citation pills extracted from the response (when available). These are citations that appear
    inline within the text. Each entry is one (pill, source) pair; group by ``citationPillId`` to recover pill-level
    structure."""

    ads: Optional[list[Ads2]] = UNSET
    """Array of ads served in the ChatGPT response (included when include.ads is true). OpenAI serves candidate ads but
    the interface renders at most one; use ``rendered`` to identify which were actually shown."""

    follow_up_form: OptionalNullable[FollowUpForm] = Field(default=UNSET, alias="followUpForm")
    """The form that ChatGPT shows at the end of an answer to refine the prompt: questions with options, and a button
    that sends a follow-up prompt. ``null`` when the answer has no form. The form is not part of ``text`` or
    ``markdown``. Schema at /api-reference/endpoint/chatgpt/follow-up-form."""


class ChatGptResultDict(TypedDict):
    text: NotRequired[str]
    sources: NotRequired[list[Source12Dict]]
    html: NotRequired[str]
    markdown: NotRequired[str]
    raw_response: NotRequired[list[RawResponseDict]]
    search_queries: NotRequired[list[str]]
    map_search_queries: NotRequired[list[str]]
    model: NotRequired[str | None]
    shopping_cards: NotRequired[list[ShoppingCard5Dict]]
    inline_products: NotRequired[list[InlineProduct2Dict]]
    entities: NotRequired[list[Entity1Dict]]
    map: NotRequired[list[Map1Dict]]
    citation_pills: NotRequired[list[CitationPill5Dict]]
    ads: NotRequired[list[Ads2Dict]]
    follow_up_form: NotRequired[FollowUpFormDict | None]
