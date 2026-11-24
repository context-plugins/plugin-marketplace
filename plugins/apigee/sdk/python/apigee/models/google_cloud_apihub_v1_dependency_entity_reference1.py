from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1DependencyEntityReference1(SdkBaseModel):
    """Required. Immutable. The entity acting as the supplier in the dependency."""

    external_api_resource_name: Optional[str] = Field(default=UNSET, alias="externalApiResourceName")
    """The resource name of an external API in the API Hub. Format:
    ``projects/{project}/locations/{location}/externalApis/{external_api}``"""

    operation_resource_name: Optional[str] = Field(default=UNSET, alias="operationResourceName")
    """The resource name of an operation in the API Hub. Format:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Output only. Display name of the entity."""


class GoogleCloudApihubV1DependencyEntityReference1Dict(TypedDict):
    external_api_resource_name: NotRequired[str]
    operation_resource_name: NotRequired[str]
    display_name: NotRequired[str]
