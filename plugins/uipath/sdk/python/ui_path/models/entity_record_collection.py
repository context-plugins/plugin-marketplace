from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_record import EntityRecord, EntityRecordDict


class EntityRecordCollection(SdkBaseModel):
    """A paginated collection of entity records"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of records matching the query"""

    value: Optional[list[EntityRecord]] = UNSET
    """Array of entity records for the current page"""

    next_link: Optional[str] = Field(default=UNSET, alias="nextLink")
    """URL for the next page of results, if more records are available"""


class EntityRecordCollectionDict(TypedDict):
    total_count: NotRequired[int]
    value: NotRequired[list[EntityRecordDict]]
    next_link: NotRequired[str]
