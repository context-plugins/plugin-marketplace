from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2(SdkBaseModel):
    """Optional. mTLS configuration for the OTel Collector endpoint. Required when ``otel_collector_security_scheme`` ==
    MTLS; must not be set otherwise."""

    key_store: Optional[str] = Field(default=UNSET, alias="keyStore")
    """Required. Keystore holding the client-side key/cert alias. Accepts either a plain keystore ID (e.g.
    ``my-keystore``) resolving to ``organizations/{org}/environments/{env}/keystores/{key_store}``, or a reference URI
    of the form ``ref://{referenceID}`` that points to a Reference whose ``resource_type`` is ``KeyStore``."""

    key_alias: Optional[str] = Field(default=UNSET, alias="keyAlias")
    """Required. Plain alias ID within ``key_store`` that contains the client key/cert used for mTLS."""

    trust_store: Optional[str] = Field(default=UNSET, alias="trustStore")
    """Required. Truststore holding the CA(s) that signed the OTel Collector's server certificate. Accepts either a
    plain keystore ID (e.g. ``my-truststore``) resolving to
    ``organizations/{org}/environments/{env}/keystores/{trust_store}``, or a reference URI of the form
    ``ref://{referenceID}`` that points to a Reference whose ``resource_type`` is ``KeyStore`` (used as a
    truststore)."""


class GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2Dict(TypedDict):
    key_store: NotRequired[str]
    key_alias: NotRequired[str]
    trust_store: NotRequired[str]
