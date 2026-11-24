from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Explanation(SdkBaseModel):
    """The AI-generated portion of the response."""

    text: str
    """Concise, likely-cause explanation of the anomaly."""

    generated_by: str = Field(alias="generatedBy")
    """Identifies the system that generated the explanation."""

    ai_generated: bool = Field(alias="aiGenerated")
    """Always true; present so consumers can identify AI-generated content explicitly."""


class ExplanationDict(TypedDict):
    text: str
    generated_by: str
    ai_generated: bool
