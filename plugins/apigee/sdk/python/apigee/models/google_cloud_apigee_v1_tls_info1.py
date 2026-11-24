from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_tls_info_common_name2 import (
    GoogleCloudApigeeV1TlsInfoCommonName2,
    GoogleCloudApigeeV1TlsInfoCommonName2Dict,
)


class GoogleCloudApigeeV1TlsInfo1(SdkBaseModel):
    """Optional. Specifies TLS configuration info for this TargetServer. The JSON name is ``sSLInfo`` for
    legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS
    configuration."""

    client_auth_enabled: Optional[bool] = Field(default=UNSET, alias="clientAuthEnabled")
    """Optional. Enables two-way TLS."""

    enabled: Optional[bool] = UNSET
    """Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled."""

    enforce: Optional[bool] = UNSET
    """TLS is strictly enforced."""

    common_name: Optional[GoogleCloudApigeeV1TlsInfoCommonName2] = Field(default=UNSET, alias="commonName")
    """The TLS Common Name of the certificate."""

    trust_store: Optional[str] = Field(default=UNSET, alias="trustStore")
    """The resource ID of the truststore."""

    ignore_validation_errors: Optional[bool] = Field(default=UNSET, alias="ignoreValidationErrors")
    """If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints,
    and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the
    backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname,
    there is no way to ignore the error and the connection fails."""

    protocols: Optional[list[str]] = UNSET
    """The TLS versioins to be used."""

    ciphers: Optional[list[str]] = UNSET
    """The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed
    in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable
    proxies, it must follow the configuration specified in:
    https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting
    has no effect for configurable proxies when negotiating TLS 1.3."""

    key_store: Optional[str] = Field(default=UNSET, alias="keyStore")
    """Required if ``client_auth_enabled`` is true. The resource ID of the keystore."""

    key_alias: Optional[str] = Field(default=UNSET, alias="keyAlias")
    """Required if ``client_auth_enabled`` is true. The resource ID for the alias containing the private key and
    cert."""


class GoogleCloudApigeeV1TlsInfo1Dict(TypedDict):
    client_auth_enabled: NotRequired[bool]
    enabled: NotRequired[bool]
    enforce: NotRequired[bool]
    common_name: NotRequired[GoogleCloudApigeeV1TlsInfoCommonName2Dict]
    trust_store: NotRequired[str]
    ignore_validation_errors: NotRequired[bool]
    protocols: NotRequired[list[str]]
    ciphers: NotRequired[list[str]]
    key_store: NotRequired[str]
    key_alias: NotRequired[str]
