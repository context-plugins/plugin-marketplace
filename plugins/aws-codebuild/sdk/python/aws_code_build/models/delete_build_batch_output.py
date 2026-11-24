from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_not_deleted import BuildNotDeleted, BuildNotDeletedDict


class DeleteBuildBatchOutput(SdkBaseModel):
    status_code: Optional[str] = Field(default=UNSET, alias="statusCode")
    """The status code."""

    builds_deleted: Optional[list[str]] = Field(default=UNSET, alias="buildsDeleted")
    """An array of strings that contain the identifiers of the builds that were deleted."""

    builds_not_deleted: Optional[list[BuildNotDeleted]] = Field(default=UNSET, alias="buildsNotDeleted")
    """An array of BuildNotDeleted objects that specify the builds that could not be deleted."""


class DeleteBuildBatchOutputDict(TypedDict):
    status_code: NotRequired[str]
    builds_deleted: NotRequired[list[str]]
    builds_not_deleted: NotRequired[list[BuildNotDeletedDict]]
