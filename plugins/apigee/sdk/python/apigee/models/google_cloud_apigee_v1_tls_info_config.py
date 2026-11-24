from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_common_name_config2 import (
    GoogleCloudApigeeV1CommonNameConfig2,
    GoogleCloudApigeeV1CommonNameConfig2Dict,
)
from .google_cloud_apigee_v1_key_alias_reference3 import (
    GoogleCloudApigeeV1KeyAliasReference3,
    GoogleCloudApigeeV1KeyAliasReference3Dict,
)


class GoogleCloudApigeeV1TlsInfoConfig(SdkBaseModel):
    ignore_validation_errors: Optional[bool] = Field(default=UNSET, alias="ignoreValidationErrors")
    """Flag that specifies whether to ignore TLS certificate validation errors. Set to ``true`` to ignore errors."""

    key_alias: Optional[str] = Field(default=UNSET, alias="keyAlias")
    """Name of the alias used for client-side authentication in the following format:
    ``organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}``"""

    common_name: Optional[GoogleCloudApigeeV1CommonNameConfig2] = Field(default=UNSET, alias="commonName")
    """Common name to validate the target server against."""

    protocols: Optional[list[str]] = UNSET
    """List of TLS protocols that are granted access."""

    trust_store: Optional[str] = Field(default=UNSET, alias="trustStore")
    """Name of the keystore or keystore reference containing trusted certificates for the server in the following
    format: ``organizations/{org}/environments/{env}/keystores/{keystore}`` or
    ``organizations/{org}/environments/{env}/references/{reference}``"""

    client_auth_enabled: Optional[bool] = Field(default=UNSET, alias="clientAuthEnabled")
    """Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS."""

    ciphers: Optional[list[str]] = UNSET
    """List of ciphers that are granted access."""

    key_alias_reference: Optional[GoogleCloudApigeeV1KeyAliasReference3] = Field(
        default=UNSET, alias="keyAliasReference"
    )
    """Reference name and alias pair to use for client-side authentication."""

    enabled: Optional[bool] = UNSET
    """Flag that specifies whether one-way TLS is enabled. Set to ``true`` to enable one-way TLS."""

    enforce: Optional[bool] = UNSET
    """Flag that enforces TLS settings"""


class GoogleCloudApigeeV1TlsInfoConfigDict(TypedDict):
    ignore_validation_errors: NotRequired[bool]
    key_alias: NotRequired[str]
    common_name: NotRequired[GoogleCloudApigeeV1CommonNameConfig2Dict]
    protocols: NotRequired[list[str]]
    trust_store: NotRequired[str]
    client_auth_enabled: NotRequired[bool]
    ciphers: NotRequired[list[str]]
    key_alias_reference: NotRequired[GoogleCloudApigeeV1KeyAliasReference3Dict]
    enabled: NotRequired[bool]
    enforce: NotRequired[bool]
