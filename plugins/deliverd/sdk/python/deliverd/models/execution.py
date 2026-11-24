from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Execution(SdkBaseModel):
    """The run this belongs to, found by its id or started. Use instead of flowId"""

    provider_execution_id: Optional[str] = Field(default=UNSET, alias="providerExecutionId")
    """Your platform's id for this run"""

    objective: Optional[str] = UNSET
    title: Optional[str] = UNSET
    parent_flow_id: Optional[UUID] = Field(default=UNSET, alias="parentFlowId")
    """The run that delegated this one"""


class ExecutionDict(TypedDict):
    provider_execution_id: NotRequired[str]
    objective: NotRequired[str]
    title: NotRequired[str]
    parent_flow_id: NotRequired[UUID]
