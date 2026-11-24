from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OtelCollectorSecurityScheme(str, Enum):
    """Optional. The security scheme for the OTel Collector endpoint. Defaults to NONE (unauthenticated OTLP/HTTP),
    preserving today's behavior for existing configurations. Only applicable when ``exporter`` ==
    OPEN_TELEMETRY_COLLECTOR."""

    OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED = "OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED"
    NONE = "NONE"
    MTLS = "MTLS"

    __str__ = str.__str__


OtelCollectorSecuritySchemeOrStr: TypeAlias = Annotated[
    OtelCollectorSecurityScheme | str, open_enum_validator(OtelCollectorSecurityScheme)
]
