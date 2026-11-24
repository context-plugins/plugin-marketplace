from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateDeploymentRequest(SdkBaseModel):
    """Parameters for triggering a new deployment."""

    upload_uid: Optional[str] = UNSET
    """The UID or reference to the previously uploaded build artifact."""

    branch: Optional[str] = UNSET
    """The git branch to deploy from when using repository-linked deployments."""


class CreateDeploymentRequestDict(TypedDict):
    upload_uid: NotRequired[str]
    branch: NotRequired[str]
