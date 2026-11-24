from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.toxicity_category import ToxicityCategoryOrStr


class ToxicityDetectionSettings(SdkBaseModel):
    toxicity_categories: list[ToxicityCategoryOrStr] = Field(alias="ToxicityCategories")
    """If you include ToxicityDetection in your transcription request, you must also include ToxicityCategories. The
    only accepted value for this parameter is ALL."""


class ToxicityDetectionSettingsDict(TypedDict):
    toxicity_categories: list[ToxicityCategoryOrStr]
