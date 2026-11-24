from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OfrepBulkEvaluationRequest(SdkBaseModel):
    """Evaluate multiple flags in one request"""

    context: Optional[Any] = UNSET
    """Context information for flag evaluation"""


class OfrepBulkEvaluationRequestDict(TypedDict):
    context: NotRequired[Any]
