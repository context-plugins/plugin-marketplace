from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_not_deleted import BuildNotDeleted, BuildNotDeletedDict


class BatchDeleteBuildsOutput(SdkBaseModel):
    builds_deleted: Optional[list[str]] = Field(default=UNSET, alias="buildsDeleted")
    """The IDs of the builds that were successfully deleted."""

    builds_not_deleted: Optional[list[BuildNotDeleted]] = Field(default=UNSET, alias="buildsNotDeleted")
    """Information about any builds that could not be successfully deleted."""


class BatchDeleteBuildsOutputDict(TypedDict):
    builds_deleted: NotRequired[list[str]]
    builds_not_deleted: NotRequired[list[BuildNotDeletedDict]]
