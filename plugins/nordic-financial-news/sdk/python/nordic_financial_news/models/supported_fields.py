from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SupportedFields(SdkBaseModel):
    articles: Optional[list[str]] = UNSET
    stories: Optional[list[str]] = UNSET
    events: Optional[list[str]] = UNSET
    event_types: Optional[list[str]] = UNSET
    calendar_events: Optional[list[str]] = UNSET
    categories: Optional[list[str]] = UNSET
    companies: Optional[list[str]] = UNSET
    countries: Optional[list[str]] = UNSET
    exchanges: Optional[list[str]] = UNSET
    indices: Optional[list[str]] = UNSET
    sources: Optional[list[str]] = UNSET


class SupportedFieldsDict(TypedDict):
    articles: NotRequired[list[str]]
    stories: NotRequired[list[str]]
    events: NotRequired[list[str]]
    event_types: NotRequired[list[str]]
    calendar_events: NotRequired[list[str]]
    categories: NotRequired[list[str]]
    companies: NotRequired[list[str]]
    countries: NotRequired[list[str]]
    exchanges: NotRequired[list[str]]
    indices: NotRequired[list[str]]
    sources: NotRequired[list[str]]
