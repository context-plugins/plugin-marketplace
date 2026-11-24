from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_product import GoogleCloudApigeeV1ApiProduct, GoogleCloudApigeeV1ApiProductDict


class GoogleCloudApigeeV1ListApiProductsResponse(SdkBaseModel):
    api_product: Optional[list[GoogleCloudApigeeV1ApiProduct]] = Field(default=UNSET, alias="apiProduct")
    """Lists all API product names defined for an organization."""


class GoogleCloudApigeeV1ListApiProductsResponseDict(TypedDict):
    api_product: NotRequired[list[GoogleCloudApigeeV1ApiProductDict]]
