from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TraceProtocol(str, Enum):
    """Optional. The trace protocol to use. Configuration Requirements (if trace_protocol is OTLP): - Allowed Exporters:
    CLOUD_TRACE or OPEN_TELEMETRY_COLLECTOR. - If Exporter is OPEN_TELEMETRY_COLLECTOR: - endpoint refers to a valid
    OTLP collector URL. - If Exporter is CLOUD_TRACE: - endpoint refers to a valid project ID."""

    TRACE_PROTOCOL_UNSPECIFIED = "TRACE_PROTOCOL_UNSPECIFIED"
    OPEN_CENSUS = "OPEN_CENSUS"
    OTLP = "OTLP"

    __str__ = str.__str__


TraceProtocolOrStr: TypeAlias = Annotated[TraceProtocol | str, open_enum_validator(TraceProtocol)]
