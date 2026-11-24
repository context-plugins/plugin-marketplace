from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OtelCollectorSecurityScheme1(str, Enum):
    """Optional. Security scheme for the outbound connection to the customer-owned OpenTelemetry Collector. Only
    meaningful when ``exporter`` is ``OPEN_TELEMETRY_COLLECTOR``. Runtime consumers unaware of a value should treat it
    as ``OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED`` (== NONE)."""

    OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED = "OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED"
    NONE = "NONE"
    MTLS = "MTLS"

    __str__ = str.__str__


OtelCollectorSecurityScheme1OrStr: TypeAlias = Annotated[
    OtelCollectorSecurityScheme1 | str, open_enum_validator(OtelCollectorSecurityScheme1)
]
