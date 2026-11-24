from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelTraceRetrievalRequest(SdkBaseModel):
    retrieval_token: str = Field(alias="RetrievalToken")
    """Retrieval token."""


class CancelTraceRetrievalRequestDict(TypedDict):
    retrieval_token: str
