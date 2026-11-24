from __future__ import annotations

from typing import TypeAlias

from ..search_batch_response import SearchBatchResponse, SearchBatchResponseDict
from ..search_response import SearchResponse, SearchResponseDict

SearchResponse1: TypeAlias = SearchResponse | SearchBatchResponse

SearchResponse1Dict: TypeAlias = SearchResponseDict | SearchBatchResponseDict
