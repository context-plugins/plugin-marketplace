from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1MoveSharedFlowRequest(SdkBaseModel):
    """Moves a Shared Flow to a different space."""

    space: Optional[str] = UNSET
    """Optional. Resource ID of the space to move the shared flow to. If unspecified, the shared flow will be moved to
    the organization level."""


class GoogleCloudApigeeV1MoveSharedFlowRequestDict(TypedDict):
    space: NotRequired[str]
