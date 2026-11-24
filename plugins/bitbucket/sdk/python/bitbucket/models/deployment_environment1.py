from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeploymentEnvironment1(SdkBaseModel):
    """All Of object, deployment_environment1."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the environment."""

    name: Optional[str] = UNSET
    """The name of the environment."""


class DeploymentEnvironment1Dict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
