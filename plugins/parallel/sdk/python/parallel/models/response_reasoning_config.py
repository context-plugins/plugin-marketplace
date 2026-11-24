from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.effort import EffortOrStr


class ResponseReasoningConfig(SdkBaseModel):
    """Reasoning configuration (OpenAI-compatible subset)."""

    effort: Optional[EffortOrStr] = UNSET
    """Controls how much research is performed, trading response time for answer quality. Defaults to ``medium`` when
    omitted."""


class ResponseReasoningConfigDict(TypedDict):
    effort: NotRequired[EffortOrStr]
