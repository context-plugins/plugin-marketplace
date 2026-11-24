from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContainerResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The container ID."""


class ContainerResponseDict(TypedDict):
    id: NotRequired[str]
