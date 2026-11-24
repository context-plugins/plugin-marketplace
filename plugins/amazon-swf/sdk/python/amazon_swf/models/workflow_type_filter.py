from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkflowTypeFilter(SdkBaseModel):
    name: str
    """Name of the workflow type."""

    version: Optional[str] = UNSET
    """Version of the workflow type."""


class WorkflowTypeFilterDict(TypedDict):
    name: str
    version: NotRequired[str]
