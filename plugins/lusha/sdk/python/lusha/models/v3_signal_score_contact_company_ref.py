from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3SignalScoreContactCompanyRef(SdkBaseModel):
    """Company the contact was scored at."""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET


class V3SignalScoreContactCompanyRefDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
