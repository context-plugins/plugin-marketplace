from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PipelineCreation(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the new pipeline"""

    state: Optional[str] = UNSET
    """The state of the new pipeline"""

    number: Optional[int] = UNSET
    """The pipeline number"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the pipeline was created"""


class PipelineCreationDict(TypedDict):
    id: NotRequired[UUID]
    state: NotRequired[str]
    number: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
