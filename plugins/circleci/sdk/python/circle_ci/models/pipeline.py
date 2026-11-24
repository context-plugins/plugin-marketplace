from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Pipeline(SdkBaseModel):
    """The pipeline this job belongs to"""

    id: Optional[UUID] = UNSET
    """The pipeline ID"""


class PipelineDict(TypedDict):
    id: NotRequired[UUID]
