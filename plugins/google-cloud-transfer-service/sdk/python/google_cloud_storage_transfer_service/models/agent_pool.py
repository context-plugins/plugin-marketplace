from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bandwidth_limit2 import BandwidthLimit2, BandwidthLimit2Dict
from .enums.state import StateOrStr


class AgentPool(SdkBaseModel):
    """Represents an agent pool."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Specifies the client-specified AgentPool description."""

    name: Optional[str] = UNSET
    """Required. Specifies a unique string that identifies the agent pool. Format:
    ``projects/{project_id}/agentPools/{agent_pool_id}``"""

    state: Optional[StateOrStr] = UNSET
    """Output only. Specifies the state of the AgentPool."""

    bandwidth_limit: Optional[BandwidthLimit2] = Field(default=UNSET, alias="bandwidthLimit")
    """Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'."""


class AgentPoolDict(TypedDict):
    display_name: NotRequired[str]
    name: NotRequired[str]
    state: NotRequired[StateOrStr]
    bandwidth_limit: NotRequired[BandwidthLimit2Dict]
