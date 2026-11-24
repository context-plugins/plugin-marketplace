from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.object_relm_crm_search_api import ObjectRelmCrmSearchApiOrStr
from .result import Result, ResultDict


class SearchResult(SdkBaseModel):
    object_: Optional[ObjectRelmCrmSearchApiOrStr] = Field(default=UNSET, alias="object")
    query: Optional[str] = UNSET
    has_more: Optional[bool] = UNSET
    results: Optional[list[Result]] = UNSET


class SearchResultDict(TypedDict):
    object_: NotRequired[ObjectRelmCrmSearchApiOrStr]
    query: NotRequired[str]
    has_more: NotRequired[bool]
    results: NotRequired[list[ResultDict]]
