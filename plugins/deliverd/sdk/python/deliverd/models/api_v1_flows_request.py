from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1FlowsRequest(SdkBaseModel):
    title: str
    """What this piece of work is, as the timeline will be titled"""

    description: Optional[str] = UNSET
    """What it is for, for whoever reads the history a year from now"""

    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your own reference, returned unchanged. Look it up before starting a second flow for the same job"""

    metadata: Optional[dict[str, Any]] = UNSET
    parent_flow_id: Optional[UUID] = Field(default=UNSET, alias="parentFlowId")
    """The flow this work was delegated from — an orchestrator's run — so the record keeps the chain"""

    provider_execution_id: Optional[str] = Field(default=UNSET, alias="providerExecutionId")
    """Your platform's id for this run, so a resumed session can find it again"""


class ApiV1FlowsRequestDict(TypedDict):
    title: str
    description: NotRequired[str]
    workspace_id: NotRequired[UUID]
    external_id: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
    parent_flow_id: NotRequired[UUID]
    provider_execution_id: NotRequired[str]
