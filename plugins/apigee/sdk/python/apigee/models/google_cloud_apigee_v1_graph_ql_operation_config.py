from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_graph_ql_operation import (
    GoogleCloudApigeeV1GraphQlOperation,
    GoogleCloudApigeeV1GraphQlOperationDict,
)
from .google_cloud_apigee_v1_quota1 import GoogleCloudApigeeV1Quota1, GoogleCloudApigeeV1Quota1Dict


class GoogleCloudApigeeV1GraphQlOperationConfig(SdkBaseModel):
    """Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota
    enforcement."""

    quota: Optional[GoogleCloudApigeeV1Quota1] = UNSET
    """Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified,
    quota enforcement will not be done."""

    operations: Optional[list[GoogleCloudApigeeV1GraphQlOperation]] = UNSET
    """Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be
    applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of
    the GraphQL name. **Note**: Currently, you can specify only a single GraphQLOperation. Specifying more than one will
    cause the operation to fail."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """Custom attributes associated with the operation."""

    api_source: Optional[str] = Field(default=UNSET, alias="apiSource")
    """Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are
    associated."""


class GoogleCloudApigeeV1GraphQlOperationConfigDict(TypedDict):
    quota: NotRequired[GoogleCloudApigeeV1Quota1Dict]
    operations: NotRequired[list[GoogleCloudApigeeV1GraphQlOperationDict]]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    api_source: NotRequired[str]
