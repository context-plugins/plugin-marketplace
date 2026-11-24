from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_deployment import GoogleCloudApihubV1Deployment, GoogleCloudApihubV1DeploymentDict


class GoogleCloudApihubV1ListDeploymentsResponse(SdkBaseModel):
    """The ListDeployments method's response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    deployments: Optional[list[GoogleCloudApihubV1Deployment]] = UNSET
    """The deployment resources present in the API hub."""


class GoogleCloudApihubV1ListDeploymentsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    deployments: NotRequired[list[GoogleCloudApihubV1DeploymentDict]]
