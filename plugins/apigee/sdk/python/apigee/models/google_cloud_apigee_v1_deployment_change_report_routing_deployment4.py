from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4(SdkBaseModel):
    """Existing base path/deployment causing the conflict."""

    revision: Optional[str] = UNSET
    """Name of the deployed API proxy revision containing the base path."""

    environment: Optional[str] = UNSET
    """Name of the environment in which the proxy is deployed."""

    basepath: Optional[str] = UNSET
    """Base path receiving traffic."""

    api_proxy: Optional[str] = Field(default=UNSET, alias="apiProxy")
    """Name of the deployed API proxy revision containing the base path."""


class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4Dict(TypedDict):
    revision: NotRequired[str]
    environment: NotRequired[str]
    basepath: NotRequired[str]
    api_proxy: NotRequired[str]
