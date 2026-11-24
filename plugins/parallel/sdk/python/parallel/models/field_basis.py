from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .citation import Citation, CitationDict


class FieldBasis(SdkBaseModel):
    """Citations and reasoning supporting one field of a task output."""

    field: str
    """Name of the output field."""

    citations: Optional[list[Citation]] = UNSET
    """List of citations supporting the output field."""

    reasoning: str
    """Reasoning for the output field."""

    confidence: Optional[str] = UNSET
    """Confidence level for the output field. Only certain processors provide confidence levels."""


class FieldBasisDict(TypedDict):
    field: str
    citations: NotRequired[list[CitationDict]]
    reasoning: str
    confidence: NotRequired[str]
