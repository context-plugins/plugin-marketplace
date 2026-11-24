from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DockerServerStatus(SdkBaseModel):
    status: Optional[str] = UNSET
    """The status of the docker server."""

    message: Optional[str] = UNSET
    """A message associated with the status of a docker server."""


class DockerServerStatusDict(TypedDict):
    status: NotRequired[str]
    message: NotRequired[str]
