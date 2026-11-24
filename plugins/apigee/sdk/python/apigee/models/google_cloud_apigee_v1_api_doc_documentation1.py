from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_async_api_documentation2 import (
    GoogleCloudApigeeV1AsyncApiDocumentation2,
    GoogleCloudApigeeV1AsyncApiDocumentation2Dict,
)
from .google_cloud_apigee_v1_graphql_documentation1 import (
    GoogleCloudApigeeV1GraphqlDocumentation1,
    GoogleCloudApigeeV1GraphqlDocumentation1Dict,
)
from .google_cloud_apigee_v1_oas_documentation2 import (
    GoogleCloudApigeeV1OasDocumentation2,
    GoogleCloudApigeeV1OasDocumentation2Dict,
)


class GoogleCloudApigeeV1ApiDocDocumentation1(SdkBaseModel):
    """Output only. The documentation resource."""

    async_api_documentation: Optional[GoogleCloudApigeeV1AsyncApiDocumentation2] = Field(
        default=UNSET, alias="asyncApiDocumentation"
    )
    """Optional. AsyncAPI Specification documentation."""

    graphql_documentation: Optional[GoogleCloudApigeeV1GraphqlDocumentation1] = Field(
        default=UNSET, alias="graphqlDocumentation"
    )
    """Optional. GraphQL documentation."""

    oas_documentation: Optional[GoogleCloudApigeeV1OasDocumentation2] = Field(default=UNSET, alias="oasDocumentation")
    """Optional. OpenAPI Specification documentation."""


class GoogleCloudApigeeV1ApiDocDocumentation1Dict(TypedDict):
    async_api_documentation: NotRequired[GoogleCloudApigeeV1AsyncApiDocumentation2Dict]
    graphql_documentation: NotRequired[GoogleCloudApigeeV1GraphqlDocumentation1Dict]
    oas_documentation: NotRequired[GoogleCloudApigeeV1OasDocumentation2Dict]
