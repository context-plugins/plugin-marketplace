from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_quota3 import GoogleCloudApigeeV1Quota3, GoogleCloudApigeeV1Quota3Dict


class GoogleCloudApigeeV1GrpcOperationConfig(SdkBaseModel):
    """Binds the resources in a proxy or remote service with the gRPC operation and its associated quota enforcement."""

    methods: Optional[list[str]] = UNSET
    """List of unqualified gRPC method names for the proxy to which quota will be applied. If this field is empty, the
    Quota will apply to all operations on the gRPC service defined on the proxy. Example: Given a proxy that is
    configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and
    com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"]."""

    quota: Optional[GoogleCloudApigeeV1Quota3] = UNSET
    """Quota parameters to be enforced for the methods and API source combination. If none are specified, quota
    enforcement will not be done."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """Custom attributes associated with the operation."""

    api_source: Optional[str] = Field(default=UNSET, alias="apiSource")
    """Required. Name of the API proxy with which the gRPC operation and quota are associated."""

    service: Optional[str] = UNSET
    """Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied
    upon."""


class GoogleCloudApigeeV1GrpcOperationConfigDict(TypedDict):
    methods: NotRequired[list[str]]
    quota: NotRequired[GoogleCloudApigeeV1Quota3Dict]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    api_source: NotRequired[str]
    service: NotRequired[str]
