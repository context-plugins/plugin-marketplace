from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetRetrievedTracesGraphRequest(SdkBaseModel):
    retrieval_token: str = Field(alias="RetrievalToken")
    """Retrieval token."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of indexes."""


class GetRetrievedTracesGraphRequestDict(TypedDict):
    retrieval_token: str
    next_token: NotRequired[str]
