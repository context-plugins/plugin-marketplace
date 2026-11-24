from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.state import StateOrStr
from .error import Error, ErrorDict
from .trigger import Trigger, TriggerDict
from .vcs import Vcs, VcsDict


class PipelineCircleCiRestApiV2PipelineApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the pipeline"""

    errors: Optional[list[Error]] = UNSET
    """Errors that occurred during pipeline setup"""

    project_slug: Optional[str] = UNSET
    """The project slug"""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """When the pipeline was last updated"""

    number: Optional[int] = UNSET
    """The pipeline number"""

    state: Optional[StateOrStr] = UNSET
    """The current state of the pipeline"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the pipeline was created"""

    trigger: Optional[Trigger] = UNSET
    """The trigger that started this pipeline"""

    vcs: Optional[Vcs] = UNSET
    """VCS information for this pipeline"""


class PipelineCircleCiRestApiV2PipelineApiDict(TypedDict):
    id: NotRequired[UUID]
    errors: NotRequired[list[ErrorDict]]
    project_slug: NotRequired[str]
    updated_at: NotRequired[RFC3339DateTime]
    number: NotRequired[int]
    state: NotRequired[StateOrStr]
    created_at: NotRequired[RFC3339DateTime]
    trigger: NotRequired[TriggerDict]
    vcs: NotRequired[VcsDict]
