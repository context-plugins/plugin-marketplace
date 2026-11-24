from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_key_alias_reference1 import (
    GoogleCloudApigeeV1KeyAliasReference1,
    GoogleCloudApigeeV1KeyAliasReference1Dict,
)


class GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig(SdkBaseModel):
    """Runtime-side view of ``TraceConfig.OtelMtlsConfig`` for the outbound OTel Collector mTLS connection. Shape
    mirrors ``TlsInfoConfig`` (in this same file, above) exactly. The oneof discriminates between a direct keystore
    reference and a ``ref://``-indirected reference; both are surfaced on the wire without flattening. The referenced
    keystore must also appear in ``EnvironmentConfig.keystores[]`` so the underlying alias bytes are available at
    runtime. Referential integrity is enforced at trace-config update time: any PATCH that references a keystore not
    already present is rejected in the same transaction that would persist the update, and keystore/alias/reference
    deletion is blocked while a trace-config references it."""

    key_alias: Optional[str] = Field(default=UNSET, alias="keyAlias")
    """Full alias resource name of the client-side key/cert alias. Format:
    ``organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`` Set when the customer supplied a
    plain keystore ID in ``TraceConfig.OtelMtlsConfig.key_store``."""

    trust_store: Optional[str] = Field(default=UNSET, alias="trustStore")
    """Full resource name of the truststore holding the CA(s) that signed the OTel Collector's server certificate.
    Either a keystore or a reference resource name, mirroring ``TlsInfoConfig.trust_store`` above:
    ``organizations/{org}/environments/{env}/keystores/{keystore}``
    ``organizations/{org}/environments/{env}/references/{reference}``"""

    key_alias_reference: Optional[GoogleCloudApigeeV1KeyAliasReference1] = Field(
        default=UNSET, alias="keyAliasReference"
    )
    """Reference name and alias-id pair. Set when the customer supplied a ``ref://{referenceID}`` URI in
    ``TraceConfig.OtelMtlsConfig.key_store``. Resolved via the References catalog the same way as
    ``TlsInfoConfig.key_alias_reference`` in target-server TLS. Reuses the top-level ``KeyAliasReference`` message
    defined for ``TlsInfoConfig`` above; no new message."""


class GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfigDict(TypedDict):
    key_alias: NotRequired[str]
    trust_store: NotRequired[str]
    key_alias_reference: NotRequired[GoogleCloudApigeeV1KeyAliasReference1Dict]
