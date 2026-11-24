from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1PoliciesSimulateRequest(SdkBaseModel):
    action_id: str = Field(alias="actionId")
    """The registered action to test against"""

    input: dict[str, Any]
    """Arguments as an agent would send them. Validated against the action's schema first"""

    agent_id: Optional[UUID] = Field(default=UNSET, alias="agentId")
    """Test as a particular agent, for rules that name one"""

    environment: Optional[str] = UNSET
    """Test in a particular environment"""


class ApiV1PoliciesSimulateRequestDict(TypedDict):
    action_id: str
    input: dict[str, Any]
    agent_id: NotRequired[UUID]
    environment: NotRequired[str]
