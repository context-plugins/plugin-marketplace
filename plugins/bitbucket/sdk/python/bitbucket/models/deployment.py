from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deployment_environment1 import DeploymentEnvironment1, DeploymentEnvironment1Dict
from .deployment_release1 import DeploymentRelease1, DeploymentRelease1Dict

if TYPE_CHECKING:
    from .unions.object import Object, ObjectDict


class Deployment(SdkBaseModel):
    """All Of object, deployment."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the deployment."""

    state: Optional[Object] = UNSET
    environment: Optional[DeploymentEnvironment1] = UNSET
    """A deployment environment."""

    release: Optional[DeploymentRelease1] = UNSET
    """The release associated with this deployment."""


class DeploymentDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    state: NotRequired[ObjectDict]
    environment: NotRequired[DeploymentEnvironment1Dict]
    release: NotRequired[DeploymentRelease1Dict]
