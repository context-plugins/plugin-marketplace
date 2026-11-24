from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3EnrichedContactCompanyRef(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    industry: Optional[str] = UNSET


class V3EnrichedContactCompanyRefDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
    industry: NotRequired[str]
