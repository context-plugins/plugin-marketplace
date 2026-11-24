from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_documentation_file4 import (
    GoogleCloudApigeeV1DocumentationFile4,
    GoogleCloudApigeeV1DocumentationFile4Dict,
)


class GoogleCloudApigeeV1GraphqlDocumentation1(SdkBaseModel):
    """Optional. GraphQL documentation."""

    endpoint_uri: Optional[str] = Field(default=UNSET, alias="endpointUri")
    """Required. The GraphQL endpoint URI to be queried by API consumers. Max length is 2,083 characters."""

    schema_value: Optional[GoogleCloudApigeeV1DocumentationFile4] = Field(default=UNSET, alias="schema")
    """Required. The documentation file contents for the GraphQL schema."""


class GoogleCloudApigeeV1GraphqlDocumentation1Dict(TypedDict):
    endpoint_uri: NotRequired[str]
    schema_value: NotRequired[GoogleCloudApigeeV1DocumentationFile4Dict]
