from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.http_element_location import HttpElementLocationOrStr
from .google_cloud_apihub_v1_secret2 import GoogleCloudApihubV1Secret2, GoogleCloudApihubV1Secret2Dict


class GoogleCloudApihubV1ApiKeyConfig(SdkBaseModel):
    """Config for authentication with API key."""

    http_element_location: Optional[HttpElementLocationOrStr] = Field(default=UNSET, alias="httpElementLocation")
    """Required. The location of the API key. The default value is QUERY."""

    api_key: Optional[GoogleCloudApihubV1Secret2] = Field(default=UNSET, alias="apiKey")
    """Required. The name of the SecretManager secret version resource storing the API key. Format:
    ``projects/{project}/secrets/{secrete}/versions/{version}``. The ``secretmanager.versions.access`` permission should
    be granted to the service account accessing the secret."""

    name: Optional[str] = UNSET
    """Required. The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=",
    "api_key" would be the parameter name."""


class GoogleCloudApihubV1ApiKeyConfigDict(TypedDict):
    http_element_location: NotRequired[HttpElementLocationOrStr]
    api_key: NotRequired[GoogleCloudApihubV1Secret2Dict]
    name: NotRequired[str]
