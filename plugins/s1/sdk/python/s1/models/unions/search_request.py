from __future__ import annotations

from typing import TypeAlias

from ..search_parameters import SearchParameters, SearchParametersDict

SearchRequest: TypeAlias = SearchParameters | list[SearchParameters]

SearchRequestDict: TypeAlias = SearchParametersDict | list[SearchParametersDict]
