from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .toxic_content import ToxicContent, ToxicContentDict


class ToxicLabels(SdkBaseModel):
    labels: Optional[list[ToxicContent]] = Field(default=UNSET, alias="Labels")
    """Array of toxic content types identified in the string."""

    toxicity: Optional[float] = Field(default=UNSET, alias="Toxicity")
    """Overall toxicity score for the string. Value range is zero to one, where one is the highest confidence."""


class ToxicLabelsDict(TypedDict):
    labels: NotRequired[list[ToxicContentDict]]
    toxicity: NotRequired[float]
