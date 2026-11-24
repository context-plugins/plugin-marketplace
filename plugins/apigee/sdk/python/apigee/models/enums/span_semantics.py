from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpanSemantics(str, Enum):
    """Optional. The span semantics to use. Configuration Requirements (if span_semantics is OTEL): - trace_protocol
    must be OTLP."""

    SPAN_SEMANTICS_UNSPECIFIED = "SPAN_SEMANTICS_UNSPECIFIED"
    LEGACY = "LEGACY"
    OTEL = "OTEL"

    __str__ = str.__str__


SpanSemanticsOrStr: TypeAlias = Annotated[SpanSemantics | str, open_enum_validator(SpanSemantics)]
