from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent import Agent, AgentDict
from .enums.category import Category, CategoryOrStr


class FeedbackRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    message: str
    intent: Optional[str] = UNSET
    category: CategoryOrStr = Category.OTHER
    request_id: Optional[str] = UNSET
    agent: Optional[Agent] = UNSET


class FeedbackRequestDict(TypedDict):
    message: str
    intent: NotRequired[str]
    category: NotRequired[CategoryOrStr]
    request_id: NotRequired[str]
    agent: NotRequired[AgentDict]
