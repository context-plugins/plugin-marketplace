from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .agent_deliverd_dev_gates_api import AgentDeliverdDevGatesApi, AgentDeliverdDevGatesApiDict
from .destination9 import Destination9, Destination9Dict
from .enums.phase4 import Phase4, Phase4OrStr


class ApiV1GatesExecutionRequest(SdkBaseModel):
    phase: Phase4OrStr = Phase4.COMPLETED
    """``started`` claims a use before you act; ``completed`` or ``failed`` reports the outcome. Reporting ``completed``
    without a ``claimId`` claims and reports in one"""

    claim_id: Optional[UUID] = Field(default=UNSET, alias="claimId")
    """The id of your ``started`` receipt, when this finishes it"""

    executed_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="executedAt")
    artifact_sha256: Optional[str] = Field(default=UNSET, alias="artifactSha256")
    """The sha256 of what you acted on. Required when the permission names an artifact"""

    destination: Optional[Destination9] = UNSET
    """Where it landed. Must be where it was authorised to"""

    result: Optional[dict[str, Any]] = UNSET
    """What the act produced: a provider reference, a URL. Recorded as your report, not as verified fact"""

    detail: Optional[str] = UNSET
    agent: Optional[AgentDeliverdDevGatesApi] = UNSET
    """Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An
    agent key already says who it is"""


class ApiV1GatesExecutionRequestDict(TypedDict):
    phase: NotRequired[Phase4OrStr]
    claim_id: NotRequired[UUID]
    executed_at: NotRequired[RFC3339DateTime]
    artifact_sha256: NotRequired[str]
    destination: NotRequired[Destination9Dict]
    result: NotRequired[dict[str, Any]]
    detail: NotRequired[str]
    agent: NotRequired[AgentDeliverdDevGatesApiDict]
