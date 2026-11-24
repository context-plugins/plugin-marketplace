from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .qa_agent_response import QaAgentResponse, QaAgentResponseDict


class PaginatedResponseQaAgentResponse(SdkBaseModel):
    items: list[QaAgentResponse]
    total: int
    limit: int
    offset: int


class PaginatedResponseQaAgentResponseDict(TypedDict):
    items: list[QaAgentResponseDict]
    total: int
    limit: int
    offset: int
