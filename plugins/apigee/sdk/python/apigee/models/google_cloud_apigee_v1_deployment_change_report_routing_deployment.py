from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment(SdkBaseModel):
    """Tuple representing a base path and the deployment containing it."""

    revision: Optional[str] = UNSET
    """Name of the deployed API proxy revision containing the base path."""

    environment: Optional[str] = UNSET
    """Name of the environment in which the proxy is deployed."""

    basepath: Optional[str] = UNSET
    """Base path receiving traffic."""

    api_proxy: Optional[str] = Field(default=UNSET, alias="apiProxy")
    """Name of the deployed API proxy revision containing the base path."""


class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentDict(TypedDict):
    revision: NotRequired[str]
    environment: NotRequired[str]
    basepath: NotRequired[str]
    api_proxy: NotRequired[str]
