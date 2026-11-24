from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason_doi_t_insights_api import ReasonDoiTInsightsApiOrStr


class DismissalDetails(SdkBaseModel):
    """Details for why an insight was dismissed."""

    reason: Optional[ReasonDoiTInsightsApiOrStr] = UNSET
    """The reason for dismissal."""

    comment: Optional[str] = UNSET
    """An optional free-text comment providing additional context."""


class DismissalDetailsDict(TypedDict):
    reason: NotRequired[ReasonDoiTInsightsApiOrStr]
    comment: NotRequired[str]
