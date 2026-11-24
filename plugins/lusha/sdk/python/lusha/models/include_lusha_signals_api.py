from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IncludeLushaSignalsApi(SdkBaseModel):
    intent_categories: Optional[list[str]] = Field(default=UNSET, alias="intentCategories")
    """Refines linkedinActivityIntent results by Bombora intent category. Only applies when linkedinActivityIntent is
    requested (via signalTypes or allSignals). See GET /v3/companies/signals/filters/intentCategories for valid
    values."""


class IncludeLushaSignalsApiDict(TypedDict):
    intent_categories: NotRequired[list[str]]
