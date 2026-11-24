from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .process import Process, ProcessDict


class ProcessQueryResult(SdkBaseModel):
    """Paginated query results for processes."""

    number_of_results: Optional[int] = Field(default=UNSET, alias="numberOfResults")
    """Total number of matching records."""

    query_token: Optional[str] = Field(default=UNSET, alias="queryToken")
    """Token for retrieving the next page of results."""

    result: Optional[list[Process]] = UNSET


class ProcessQueryResultDict(TypedDict):
    number_of_results: NotRequired[int]
    query_token: NotRequired[str]
    result: NotRequired[list[ProcessDict]]
