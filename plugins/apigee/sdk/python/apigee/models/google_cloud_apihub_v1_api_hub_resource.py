from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api5 import GoogleCloudApihubV1Api5, GoogleCloudApihubV1Api5Dict
from .google_cloud_apihub_v1_api_operation1 import (
    GoogleCloudApihubV1ApiOperation1,
    GoogleCloudApihubV1ApiOperation1Dict,
)
from .google_cloud_apihub_v1_definition2 import GoogleCloudApihubV1Definition2, GoogleCloudApihubV1Definition2Dict
from .google_cloud_apihub_v1_deployment1 import GoogleCloudApihubV1Deployment1, GoogleCloudApihubV1Deployment1Dict
from .google_cloud_apihub_v1_spec3 import GoogleCloudApihubV1Spec3, GoogleCloudApihubV1Spec3Dict
from .google_cloud_apihub_v1_version5 import GoogleCloudApihubV1Version5, GoogleCloudApihubV1Version5Dict


class GoogleCloudApihubV1ApiHubResource(SdkBaseModel):
    """ApiHubResource is one of the resources such as Api, Operation, Deployment, Definition, Spec and Version resources
    stored in API-Hub."""

    deployment: Optional[GoogleCloudApihubV1Deployment1] = UNSET
    """This represents Deployment resource in search results. Only name, display_name, description, deployment_type and
    api_versions fields are populated in search results."""

    version: Optional[GoogleCloudApihubV1Version5] = UNSET
    """This represents Version resource in search results. Only name, display_name, description, lifecycle, compliance
    and accreditation fields are populated in search results."""

    operation: Optional[GoogleCloudApihubV1ApiOperation1] = UNSET
    """This represents ApiOperation resource in search results. Only name, description, spec and details fields are
    populated in search results."""

    definition: Optional[GoogleCloudApihubV1Definition2] = UNSET
    """This represents Definition resource in search results. Only name field is populated in search results."""

    api: Optional[GoogleCloudApihubV1Api5] = UNSET
    """This represents Api resource in search results. Only name, display_name, description and owner fields are
    populated in search results."""

    spec: Optional[GoogleCloudApihubV1Spec3] = UNSET
    """This represents Spec resource in search results. Only name, display_name, description, spec_type and
    documentation fields are populated in search results."""


class GoogleCloudApihubV1ApiHubResourceDict(TypedDict):
    deployment: NotRequired[GoogleCloudApihubV1Deployment1Dict]
    version: NotRequired[GoogleCloudApihubV1Version5Dict]
    operation: NotRequired[GoogleCloudApihubV1ApiOperation1Dict]
    definition: NotRequired[GoogleCloudApihubV1Definition2Dict]
    api: NotRequired[GoogleCloudApihubV1Api5Dict]
    spec: NotRequired[GoogleCloudApihubV1Spec3Dict]
