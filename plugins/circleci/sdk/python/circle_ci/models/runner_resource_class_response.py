from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_class import ResourceClass, ResourceClassDict


class RunnerResourceClassResponse(SdkBaseModel):
    items: Optional[list[ResourceClass]] = UNSET
    """List of resource classes"""


class RunnerResourceClassResponseDict(TypedDict):
    items: NotRequired[list[ResourceClassDict]]
