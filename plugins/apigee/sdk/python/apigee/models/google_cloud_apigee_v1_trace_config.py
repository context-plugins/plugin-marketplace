from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exporter import ExporterOrStr
from .enums.otel_collector_security_scheme import OtelCollectorSecuritySchemeOrStr
from .enums.span_semantics import SpanSemanticsOrStr
from .enums.trace_protocol import TraceProtocolOrStr
from .google_cloud_apigee_v1_trace_config_otel_mtls_config2 import (
    GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2,
    GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2Dict,
)
from .google_cloud_apigee_v1_trace_sampling_config3 import (
    GoogleCloudApigeeV1TraceSamplingConfig3,
    GoogleCloudApigeeV1TraceSamplingConfig3Dict,
)


class GoogleCloudApigeeV1TraceConfig(SdkBaseModel):
    """TraceConfig defines the configurations in an environment of distributed trace."""

    endpoint: Optional[str] = UNSET
    """Required. Endpoint of the exporter."""

    otel_collector_security_scheme: Optional[OtelCollectorSecuritySchemeOrStr] = Field(
        default=UNSET, alias="otelCollectorSecurityScheme"
    )
    """Optional. The security scheme for the OTel Collector endpoint. Defaults to NONE (unauthenticated OTLP/HTTP),
    preserving today's behavior for existing configurations. Only applicable when ``exporter`` ==
    OPEN_TELEMETRY_COLLECTOR."""

    trace_protocol: Optional[TraceProtocolOrStr] = Field(default=UNSET, alias="traceProtocol")
    """Optional. The trace protocol to use. Configuration Requirements (if trace_protocol is OTLP): - Allowed Exporters:
    CLOUD_TRACE or OPEN_TELEMETRY_COLLECTOR. - If Exporter is OPEN_TELEMETRY_COLLECTOR: - endpoint refers to a valid
    OTLP collector URL. - If Exporter is CLOUD_TRACE: - endpoint refers to a valid project ID."""

    span_semantics: Optional[SpanSemanticsOrStr] = Field(default=UNSET, alias="spanSemantics")
    """Optional. The span semantics to use. Configuration Requirements (if span_semantics is OTEL): - trace_protocol
    must be OTLP."""

    exporter: Optional[ExporterOrStr] = UNSET
    """Required. Exporter that is used to view the distributed trace captured using the chosen trace protocol. An
    exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered
    exporters."""

    sampling_config: Optional[GoogleCloudApigeeV1TraceSamplingConfig3] = Field(default=UNSET, alias="samplingConfig")
    """Distributed trace configuration for all API proxies in an environment. You can also override the configuration
    for a specific API proxy using the distributed trace configuration overrides API."""

    mtls_config: Optional[GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2] = Field(default=UNSET, alias="mtlsConfig")
    """Optional. mTLS configuration for the OTel Collector endpoint. Required when ``otel_collector_security_scheme`` ==
    MTLS; must not be set otherwise."""


class GoogleCloudApigeeV1TraceConfigDict(TypedDict):
    endpoint: NotRequired[str]
    otel_collector_security_scheme: NotRequired[OtelCollectorSecuritySchemeOrStr]
    trace_protocol: NotRequired[TraceProtocolOrStr]
    span_semantics: NotRequired[SpanSemanticsOrStr]
    exporter: NotRequired[ExporterOrStr]
    sampling_config: NotRequired[GoogleCloudApigeeV1TraceSamplingConfig3Dict]
    mtls_config: NotRequired[GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2Dict]
