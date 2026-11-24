from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LatestWorkflow(SdkBaseModel):
    """The latest workflow this job is part of"""

    id: Optional[UUID] = UNSET
    """The workflow ID"""

    name: Optional[str] = UNSET
    """The workflow name"""


class LatestWorkflowDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
