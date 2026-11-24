from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.order_by_enum import OrderByEnum, OrderByEnumOrStr
from .person_query import PersonQuery, PersonQueryDict


class ApiUniversalCreditsSearchInput(SdkBaseModel):
    start: int = 1
    """Paginate through search results by returning results starting from this value (counting from 1)."""

    page_size: int = 100
    """Maximum number of search results to return per page."""

    query: Optional[PersonQuery] = UNSET
    order_by: OrderByEnumOrStr = OrderByEnum.RELEVANCE
    """Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.

    * ``relevance`` - relevance
    * ``popularity`` - popularity
    * ``score`` - score"""


class ApiUniversalCreditsSearchInputDict(TypedDict):
    start: NotRequired[int]
    page_size: NotRequired[int]
    query: NotRequired[PersonQueryDict]
    order_by: NotRequired[OrderByEnumOrStr]
