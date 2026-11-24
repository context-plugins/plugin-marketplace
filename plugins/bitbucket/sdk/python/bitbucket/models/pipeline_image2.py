from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineImage2(SdkBaseModel):
    """The Docker image used as the build container for the step."""

    name: Optional[str] = UNSET
    """The name of the image. If the image is hosted on DockerHub the short name can be used, otherwise the fully
    qualified name is required here."""

    username: Optional[str] = UNSET
    """The username needed to authenticate with the Docker registry. Only required when using a private Docker image."""

    password: Optional[str] = UNSET
    """The password needed to authenticate with the Docker registry. Only required when using a private Docker image."""

    email: Optional[str] = UNSET
    """The email needed to authenticate with the Docker registry. Only required when using a private Docker image."""


class PipelineImage2Dict(TypedDict):
    name: NotRequired[str]
    username: NotRequired[str]
    password: NotRequired[str]
    email: NotRequired[str]
