from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgentDeliverdDevGatesApi(SdkBaseModel):
    """Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An
    agent key already says who it is"""

    id: Optional[UUID] = UNSET
    """A Deliverd agent id"""

    provider: Optional[str] = UNSET
    """openai_dot, openai_chatgpt, openai_codex, anthropic, google, custom, …"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your id on that platform"""

    name: Optional[str] = UNSET


class AgentDeliverdDevGatesApiDict(TypedDict):
    id: NotRequired[UUID]
    provider: NotRequired[str]
    external_id: NotRequired[str]
    name: NotRequired[str]
