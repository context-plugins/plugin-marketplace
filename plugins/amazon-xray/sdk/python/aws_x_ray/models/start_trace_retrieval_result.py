from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartTraceRetrievalResult(SdkBaseModel):
    retrieval_token: Optional[str] = Field(default=UNSET, alias="RetrievalToken")
    """Retrieval token."""


class StartTraceRetrievalResultDict(TypedDict):
    retrieval_token: NotRequired[str]
