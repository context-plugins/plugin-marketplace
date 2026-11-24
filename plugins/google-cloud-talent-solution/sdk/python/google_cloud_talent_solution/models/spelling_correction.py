from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpellingCorrection(SdkBaseModel):
    """Spell check result."""

    corrected: Optional[bool] = UNSET
    """Indicates if the query was corrected by the spell checker."""

    corrected_text: Optional[str] = Field(default=UNSET, alias="correctedText")
    """Correction output consisting of the corrected keyword string."""

    corrected_html: Optional[str] = Field(default=UNSET, alias="correctedHtml")
    """Corrected output with html tags to highlight the corrected words. Corrected words are called out with the "*...*"
    html tags. For example, the user input query is "software enginear", where the second word, "enginear," is
    incorrect. It should be "engineer". When spelling correction is enabled, this value is "software *engineer*"."""


class SpellingCorrectionDict(TypedDict):
    corrected: NotRequired[bool]
    corrected_text: NotRequired[str]
    corrected_html: NotRequired[str]
