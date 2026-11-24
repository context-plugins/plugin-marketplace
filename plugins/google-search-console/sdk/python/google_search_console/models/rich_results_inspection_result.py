from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detected_items import DetectedItems, DetectedItemsDict
from .enums.verdict3 import Verdict3OrStr


class RichResultsInspectionResult(SdkBaseModel):
    """Rich-Results inspection result, including any rich results found at this URL."""

    verdict: Optional[Verdict3OrStr] = UNSET
    """High-level rich results inspection result for this URL."""

    detected_items: Optional[list[DetectedItems]] = Field(default=UNSET, alias="detectedItems")
    """A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to
    syntactic issues will not be listed here."""


class RichResultsInspectionResultDict(TypedDict):
    verdict: NotRequired[Verdict3OrStr]
    detected_items: NotRequired[list[DetectedItemsDict]]
