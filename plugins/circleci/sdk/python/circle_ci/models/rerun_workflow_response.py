from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RerunWorkflowResponse(SdkBaseModel):
    workflow_id: Optional[UUID] = UNSET
    """The ID of the rerun workflow"""


class RerunWorkflowResponseDict(TypedDict):
    workflow_id: NotRequired[UUID]
