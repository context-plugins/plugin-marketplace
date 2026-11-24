from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .vector_data import VectorData, VectorDataDict
from .wiki_data import WikiData, WikiDataDict


class ScoredDataWikiData(SdkBaseModel):
    score: OptionalNullable[float] = UNSET
    data: Optional[WikiData] = UNSET
    vectors: OptionalNullable[list[VectorData]] = UNSET


class ScoredDataWikiDataDict(TypedDict):
    score: NotRequired[float | None]
    data: NotRequired[WikiDataDict]
    vectors: NotRequired[list[VectorDataDict] | None]
