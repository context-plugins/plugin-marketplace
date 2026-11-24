from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpanSemantics1(str, Enum):
    """Optional. The span semantics to use. Configuration Requirements (if ``span_semantics`` is ``OTEL``): -
    ``trace_protocol`` must be ``OTLP``."""

    SPAN_SEMANTICS_UNSPECIFIED = "SPAN_SEMANTICS_UNSPECIFIED"
    LEGACY = "LEGACY"
    OTEL = "OTEL"

    __str__ = str.__str__


SpanSemantics1OrStr: TypeAlias = Annotated[SpanSemantics1 | str, open_enum_validator(SpanSemantics1)]
