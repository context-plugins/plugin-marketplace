from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeploymentEnvironment(SdkBaseModel):
    """All Of object, deployment_environment."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the environment."""

    name: Optional[str] = UNSET
    """The name of the environment."""


class DeploymentEnvironmentDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
