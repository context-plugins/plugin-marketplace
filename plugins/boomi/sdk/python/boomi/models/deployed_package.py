from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DeployedPackage(SdkBaseModel):
    """A packaged component deployed to a specific runtime environment."""

    deployment_id: Optional[str] = Field(default=UNSET, alias="deploymentId")
    """Unique identifier of the deployment."""

    environment_id: Optional[str] = Field(default=UNSET, alias="environmentId")
    """ID of the environment to which the package is deployed."""

    package_id: Optional[str] = Field(default=UNSET, alias="packageId")
    """ID of the deployed packaged component."""

    component_id: Optional[str] = Field(default=UNSET, alias="componentId")
    """ID of the underlying component."""

    component_type: Optional[str] = Field(default=UNSET, alias="componentType")
    """Type of the deployed component."""

    deployed_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="deployedDate")
    """Timestamp when the package was deployed."""

    active: Optional[bool] = UNSET
    """Whether this deployment is currently active."""


class DeployedPackageDict(TypedDict):
    deployment_id: NotRequired[str]
    environment_id: NotRequired[str]
    package_id: NotRequired[str]
    component_id: NotRequired[str]
    component_type: NotRequired[str]
    deployed_date: NotRequired[RFC3339DateTime]
    active: NotRequired[bool]
