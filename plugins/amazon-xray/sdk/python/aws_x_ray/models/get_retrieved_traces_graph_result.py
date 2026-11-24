from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.retrieval_status import RetrievalStatusOrStr
from .retrieved_service import RetrievedService, RetrievedServiceDict


class GetRetrievedTracesGraphResult(SdkBaseModel):
    retrieval_status: Optional[RetrievalStatusOrStr] = Field(default=UNSET, alias="RetrievalStatus")
    """Status of the retrieval."""

    services: Optional[list[RetrievedService]] = Field(default=UNSET, alias="Services")
    """Retrieved services."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of indexes."""


class GetRetrievedTracesGraphResultDict(TypedDict):
    retrieval_status: NotRequired[RetrievalStatusOrStr]
    services: NotRequired[list[RetrievedServiceDict]]
    next_token: NotRequired[str]
