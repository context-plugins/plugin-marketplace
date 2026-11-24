from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Exporter1(str, Enum):
    """Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any
    backend that is capable of consuming them. Recorded spans can be exported by registered exporters."""

    EXPORTER_UNSPECIFIED = "EXPORTER_UNSPECIFIED"
    JAEGER = "JAEGER"
    CLOUD_TRACE = "CLOUD_TRACE"
    OPEN_TELEMETRY_COLLECTOR = "OPEN_TELEMETRY_COLLECTOR"
    OPEN_TELEMETRY_CLOUD_TRACE = "OPEN_TELEMETRY_CLOUD_TRACE"

    __str__ = str.__str__


Exporter1OrStr: TypeAlias = Annotated[Exporter1 | str, open_enum_validator(Exporter1)]
