from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class CompanyNewsSignal(SdkBaseModel):
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    domain: Optional[str] = UNSET
    signal_id: Optional[str] = Field(default=UNSET, alias="signalId")
    event_type: Optional[str] = Field(default=UNSET, alias="eventType")
    event_summary: Optional[str] = Field(default=UNSET, alias="eventSummary")
    article_published_date: Optional[Date] = Field(default=UNSET, alias="articlePublishedDate")
    article_title: Optional[str] = Field(default=UNSET, alias="articleTitle")
    article_highlight: Optional[str] = Field(default=UNSET, alias="articleHighlight")
    event_effective_date: Optional[Date] = Field(default=UNSET, alias="eventEffectiveDate")
    article_url: Optional[str] = Field(default=UNSET, alias="articleUrl")


class CompanyNewsSignalDict(TypedDict):
    company_id: NotRequired[str]
    company_name: NotRequired[str]
    domain: NotRequired[str]
    signal_id: NotRequired[str]
    event_type: NotRequired[str]
    event_summary: NotRequired[str]
    article_published_date: NotRequired[Date]
    article_title: NotRequired[str]
    article_highlight: NotRequired[str]
    event_effective_date: NotRequired[Date]
    article_url: NotRequired[str]
