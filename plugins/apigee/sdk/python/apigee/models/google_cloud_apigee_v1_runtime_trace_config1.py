from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exporter1 import Exporter1OrStr
from .enums.otel_collector_security_scheme1 import OtelCollectorSecurityScheme1OrStr
from .enums.span_semantics1 import SpanSemantics1OrStr
from .enums.trace_protocol1 import TraceProtocol1OrStr
from .google_cloud_apigee_v1_runtime_trace_config_otel_mtls_config1 import (
    GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1,
    GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1Dict,
)
from .google_cloud_apigee_v1_runtime_trace_config_override import (
    GoogleCloudApigeeV1RuntimeTraceConfigOverride,
    GoogleCloudApigeeV1RuntimeTraceConfigOverrideDict,
)
from .google_cloud_apigee_v1_runtime_trace_sampling_config3 import (
    GoogleCloudApigeeV1RuntimeTraceSamplingConfig3,
    GoogleCloudApigeeV1RuntimeTraceSamplingConfig3Dict,
)


class GoogleCloudApigeeV1RuntimeTraceConfig1(SdkBaseModel):
    """Trace configurations. Contains config for the environment and config overrides for specific API proxies."""

    sampling_config: Optional[GoogleCloudApigeeV1RuntimeTraceSamplingConfig3] = Field(
        default=UNSET, alias="samplingConfig"
    )
    """Trace configuration for all API proxies in an environment."""

    endpoint: Optional[str] = UNSET
    """Endpoint of the exporter."""

    name: Optional[str] = UNSET
    """Name of the trace config in the following format: ``organizations/{org}/environment/{env}/traceConfig``"""

    span_semantics: Optional[SpanSemantics1OrStr] = Field(default=UNSET, alias="spanSemantics")
    """Optional. The span semantics to use. Configuration Requirements (if ``span_semantics`` is ``OTEL``): -
    ``trace_protocol`` must be ``OTLP``."""

    overrides: Optional[list[GoogleCloudApigeeV1RuntimeTraceConfigOverride]] = UNSET
    """List of trace configuration overrides for spicific API proxies."""

    m_tls_config: Optional[GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1] = Field(
        default=UNSET, alias="mTlsConfig"
    )
    """Optional. mTLS configuration for the OTel Collector endpoint. Required when ``otel_collector_security_scheme`` is
    ``MTLS``; must be absent otherwise."""

    otel_collector_security_scheme: Optional[OtelCollectorSecurityScheme1OrStr] = Field(
        default=UNSET, alias="otelCollectorSecurityScheme"
    )
    """Optional. Security scheme for the outbound connection to the customer-owned OpenTelemetry Collector. Only
    meaningful when ``exporter`` is ``OPEN_TELEMETRY_COLLECTOR``. Runtime consumers unaware of a value should treat it
    as ``OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED`` (== NONE)."""

    exporter: Optional[Exporter1OrStr] = UNSET
    """Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any
    backend that is capable of consuming them. Recorded spans can be exported by registered exporters."""

    open_telemetry_protocol_enabled: Optional[bool] = Field(default=UNSET, alias="openTelemetryProtocolEnabled")
    """Optional. If ``true``, the runtime uses OpenTelemetry Protocol (OTLP) to send trace data. Configuration
    Requirements (if ``open_telemetry_protocol_enabled`` is ``true``): - Allowed ``Exporter``s: ``CLOUD_TRACE`` or
    ``OPEN_TELEMETRY_COLLECTOR``. - If ``Exporter`` is ``OPEN_TELEMETRY_COLLECTOR``: - ``endpoint`` refers to a valid
    OTLP collector URL. - If ``Exporter`` is ``CLOUD_TRACE``: - ``endpoint`` refers to a valid project ID Deprecated:
    Use trace_protocol instead."""

    trace_protocol: Optional[TraceProtocol1OrStr] = Field(default=UNSET, alias="traceProtocol")
    """Optional. The trace protocol to use."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision number which can be used by the runtime to detect if the trace config has changed between two
    versions."""

    revision_create_time: Optional[str] = Field(default=UNSET, alias="revisionCreateTime")
    """The timestamp that the revision was created or updated."""


class GoogleCloudApigeeV1RuntimeTraceConfig1Dict(TypedDict):
    sampling_config: NotRequired[GoogleCloudApigeeV1RuntimeTraceSamplingConfig3Dict]
    endpoint: NotRequired[str]
    name: NotRequired[str]
    span_semantics: NotRequired[SpanSemantics1OrStr]
    overrides: NotRequired[list[GoogleCloudApigeeV1RuntimeTraceConfigOverrideDict]]
    m_tls_config: NotRequired[GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1Dict]
    otel_collector_security_scheme: NotRequired[OtelCollectorSecurityScheme1OrStr]
    exporter: NotRequired[Exporter1OrStr]
    open_telemetry_protocol_enabled: NotRequired[bool]
    trace_protocol: NotRequired[TraceProtocol1OrStr]
    revision_id: NotRequired[str]
    revision_create_time: NotRequired[str]
