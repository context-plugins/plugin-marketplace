from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgentDeliverdDevApprovalsApi(SdkBaseModel):
    """Which agent is asking, in your words. Recorded and shown as declared by you; nothing is decided on it"""

    name: Optional[str] = UNSET
    """What the agent is called, as people know it — "Claims triage"
    """

    provider: Optional[str] = UNSET
    """Who makes or runs it: anthropic, openai, cursor, your own company"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your own id for this agent, returned unchanged"""


class AgentDeliverdDevApprovalsApiDict(TypedDict):
    name: NotRequired[str]
    provider: NotRequired[str]
    external_id: NotRequired[str]
