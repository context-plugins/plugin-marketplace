from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .related_ioc import RelatedIoc, RelatedIocDict


class ReputationIntelligence(SdkBaseModel):
    ioc_type: Optional[str] = UNSET
    ioc_value: Optional[str] = UNSET
    related_iocs: Optional[list[RelatedIoc]] = UNSET
    feed_tags: Optional[list[str]] = UNSET
    stix_pattern: Optional[str] = UNSET
    recommended_action: Optional[str] = UNSET
    first_seen: Optional[str] = UNSET
    last_seen: Optional[str] = UNSET


class ReputationIntelligenceDict(TypedDict):
    ioc_type: NotRequired[str]
    ioc_value: NotRequired[str]
    related_iocs: NotRequired[list[RelatedIocDict]]
    feed_tags: NotRequired[list[str]]
    stix_pattern: NotRequired[str]
    recommended_action: NotRequired[str]
    first_seen: NotRequired[str]
    last_seen: NotRequired[str]
