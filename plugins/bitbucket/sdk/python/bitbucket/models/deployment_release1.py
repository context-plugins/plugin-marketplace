from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .commit2 import Commit2, Commit2Dict


class DeploymentRelease1(SdkBaseModel):
    """All Of object, deployment_release1."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the release."""

    name: Optional[str] = UNSET
    """The name of the release."""

    url: Optional[str] = UNSET
    """Link to the pipeline that produced the release."""

    commit: Optional[Commit2] = UNSET
    """The commit associated with this release."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the release was created."""


class DeploymentRelease1Dict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
    url: NotRequired[str]
    commit: NotRequired[Commit2Dict]
    created_on: NotRequired[RFC3339DateTime]
