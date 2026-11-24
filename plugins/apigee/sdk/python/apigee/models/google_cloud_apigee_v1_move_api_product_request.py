from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1MoveApiProductRequest(SdkBaseModel):
    """Moves API product to a different space."""

    space: Optional[str] = UNSET
    """Optional. Resource ID of the space to move the API product to. If unspecified, the API product will be moved to
    the organization level."""


class GoogleCloudApigeeV1MoveApiProductRequestDict(TypedDict):
    space: NotRequired[str]
