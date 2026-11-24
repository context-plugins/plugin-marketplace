from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Exporter(str, Enum):
    """Required. Exporter that is used to view the distributed trace captured using the chosen trace protocol. An
    exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered
    exporters."""

    EXPORTER_UNSPECIFIED = "EXPORTER_UNSPECIFIED"
    JAEGER = "JAEGER"
    CLOUD_TRACE = "CLOUD_TRACE"
    OPEN_TELEMETRY_COLLECTOR = "OPEN_TELEMETRY_COLLECTOR"
    OPEN_TELEMETRY_CLOUD_TRACE = "OPEN_TELEMETRY_CLOUD_TRACE"

    __str__ = str.__str__


ExporterOrStr: TypeAlias = Annotated[Exporter | str, open_enum_validator(Exporter)]
