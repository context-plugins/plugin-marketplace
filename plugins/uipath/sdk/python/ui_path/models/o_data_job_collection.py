from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job import Job, JobDict


class ODataJobCollection(SdkBaseModel):
    """OData collection response containing jobs"""

    odata_context: Optional[str] = Field(default=UNSET, alias="@odata.context")
    """OData context URL"""

    odata_count: Optional[int] = Field(default=UNSET, alias="@odata.count")
    """Total number of matching records (when $count=true)"""

    value: Optional[list[Job]] = UNSET


class ODataJobCollectionDict(TypedDict):
    odata_context: NotRequired[str]
    odata_count: NotRequired[int]
    value: NotRequired[list[JobDict]]
