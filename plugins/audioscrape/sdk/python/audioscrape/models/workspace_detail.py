from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .dataset_summary import DatasetSummary, DatasetSummaryDict


class WorkspaceDetail(SdkBaseModel):
    datasets: list[DatasetSummary]
    """ALL of the workspace's datasets — ``public``, ``workspace``, and ``private``."""

    description: OptionalNullable[str] = UNSET
    id: int
    member_count: int
    name: str
    role: str
    """The calling user's role in this workspace: ``owner``, ``admin``, or ``member``."""

    slug: str


class WorkspaceDetailDict(TypedDict):
    datasets: list[DatasetSummaryDict]
    description: NotRequired[str | None]
    id: int
    member_count: int
    name: str
    role: str
    slug: str
