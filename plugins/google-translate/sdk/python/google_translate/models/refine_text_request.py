from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .refinement_entry import RefinementEntry, RefinementEntryDict


class RefineTextRequest(SdkBaseModel):
    """Request message for RefineText."""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """Required. The BCP-47 language code for translation output, for example, "zh-CN"."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Required. The BCP-47 language code of the source text in the request, for example, "en-US"."""

    refinement_entries: Optional[list[RefinementEntry]] = Field(default=UNSET, alias="refinementEntries")
    """Required. The source texts and original translations in the source and target languages."""


class RefineTextRequestDict(TypedDict):
    target_language_code: NotRequired[str]
    source_language_code: NotRequired[str]
    refinement_entries: NotRequired[list[RefinementEntryDict]]
