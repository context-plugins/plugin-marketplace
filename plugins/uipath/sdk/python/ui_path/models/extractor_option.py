from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExtractorOption(SdkBaseModel):
    """Configuration for applying a specific extractor"""

    extractor_id: str = Field(alias="extractorId")
    """Unique identifier of the extractor to apply"""


class ExtractorOptionDict(TypedDict):
    extractor_id: str
