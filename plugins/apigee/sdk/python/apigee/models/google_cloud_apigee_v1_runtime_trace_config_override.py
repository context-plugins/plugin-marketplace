from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.span_semantics1 import SpanSemantics1OrStr
from .enums.trace_protocol1 import TraceProtocol1OrStr
from .google_cloud_apigee_v1_runtime_trace_sampling_config1 import (
    GoogleCloudApigeeV1RuntimeTraceSamplingConfig1,
    GoogleCloudApigeeV1RuntimeTraceSamplingConfig1Dict,
)


class GoogleCloudApigeeV1RuntimeTraceConfigOverride(SdkBaseModel):
    """NEXT ID: 10 Trace configuration override for a specific API proxy in an environment."""

    trace_protocol: Optional[TraceProtocol1OrStr] = Field(default=UNSET, alias="traceProtocol")
    """Optional. The trace protocol to use."""

    open_telemetry_protocol_enabled: Optional[bool] = Field(default=UNSET, alias="openTelemetryProtocolEnabled")
    """Optional. If ``true``, the runtime uses OpenTelemetry Protocol (OTLP) to send trace data. Configuration
    Requirements (if ``open_telemetry_protocol_enabled`` is ``true``): - Allowed ``Exporter``s: ``CLOUD_TRACE`` or
    ``OPEN_TELEMETRY_COLLECTOR``. - If ``Exporter`` is ``OPEN_TELEMETRY_COLLECTOR``: - ``endpoint`` refers to a valid
    OTLP collector URL. - If ``Exporter`` is ``CLOUD_TRACE``: - ``endpoint`` refers to a valid project ID Deprecated:
    Use trace_protocol instead."""

    revision_create_time: Optional[str] = Field(default=UNSET, alias="revisionCreateTime")
    """The timestamp that the revision was created or updated."""

    uid: Optional[str] = UNSET
    """Unique ID for the configuration override. The ID will only change if the override is deleted and recreated.
    Corresponds to name's "override" field."""

    api_proxy: Optional[str] = Field(default=UNSET, alias="apiProxy")
    """Name of the API proxy that will have its trace configuration overridden following format:
    ``organizations/{org}/apis/{api}``"""

    span_semantics: Optional[SpanSemantics1OrStr] = Field(default=UNSET, alias="spanSemantics")
    """Optional. The span semantics to use. Configuration Requirements (if ``span_semantics`` is ``OTEL``): -
    ``trace_protocol`` must be ``OTLP``."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision number which can be used by the runtime to detect if the trace config override has changed between two
    versions."""

    sampling_config: Optional[GoogleCloudApigeeV1RuntimeTraceSamplingConfig1] = Field(
        default=UNSET, alias="samplingConfig"
    )
    """Trace configuration override for a specific API proxy in an environment."""

    name: Optional[str] = UNSET
    """Name of the trace config override in the following format:
    ``organizations/{org}/environment/{env}/traceConfig/overrides/{override}``"""


class GoogleCloudApigeeV1RuntimeTraceConfigOverrideDict(TypedDict):
    trace_protocol: NotRequired[TraceProtocol1OrStr]
    open_telemetry_protocol_enabled: NotRequired[bool]
    revision_create_time: NotRequired[str]
    uid: NotRequired[str]
    api_proxy: NotRequired[str]
    span_semantics: NotRequired[SpanSemantics1OrStr]
    revision_id: NotRequired[str]
    sampling_config: NotRequired[GoogleCloudApigeeV1RuntimeTraceSamplingConfig1Dict]
    name: NotRequired[str]
