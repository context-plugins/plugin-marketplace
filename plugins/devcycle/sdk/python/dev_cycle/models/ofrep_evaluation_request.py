from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OfrepEvaluationRequest(SdkBaseModel):
    """Flag evaluation request"""

    context: Optional[Any] = UNSET
    """Context information for flag evaluation"""


class OfrepEvaluationRequestDict(TypedDict):
    context: NotRequired[Any]
