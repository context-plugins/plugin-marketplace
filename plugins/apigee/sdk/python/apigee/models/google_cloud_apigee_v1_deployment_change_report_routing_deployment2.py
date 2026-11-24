from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2(SdkBaseModel):
    """Base path/deployment that may start receiving that traffic. May be null if no deployment is able to receive the
    traffic."""

    revision: Optional[str] = UNSET
    """Name of the deployed API proxy revision containing the base path."""

    environment: Optional[str] = UNSET
    """Name of the environment in which the proxy is deployed."""

    basepath: Optional[str] = UNSET
    """Base path receiving traffic."""

    api_proxy: Optional[str] = Field(default=UNSET, alias="apiProxy")
    """Name of the deployed API proxy revision containing the base path."""


class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2Dict(TypedDict):
    revision: NotRequired[str]
    environment: NotRequired[str]
    basepath: NotRequired[str]
    api_proxy: NotRequired[str]
