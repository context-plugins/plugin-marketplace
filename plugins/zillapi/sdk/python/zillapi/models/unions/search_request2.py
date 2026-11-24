from __future__ import annotations

from typing import TypeAlias

from ..search_request import SearchRequest, SearchRequestDict
from ..search_request1 import SearchRequest1, SearchRequest1Dict

SearchRequest2: TypeAlias = SearchRequest | SearchRequest1
"""A search request MUST supply either ``filters`` containing a ``bbox``, OR a ``searchUrls`` array. A free-text
location alone is not supported and is rejected with 400 invalid_filters."""

SearchRequest2Dict: TypeAlias = SearchRequestDict | SearchRequest1Dict
