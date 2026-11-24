from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .linkedin_activity_intent_company_mention import (
    LinkedinActivityIntentCompanyMention,
    LinkedinActivityIntentCompanyMentionDict,
)
from .linkedin_activity_intent_person import LinkedinActivityIntentPerson, LinkedinActivityIntentPersonDict
from .linkedin_activity_intent_topic import LinkedinActivityIntentTopic, LinkedinActivityIntentTopicDict


class LinkedinActivityIntentItem(SdkBaseModel):
    company_id: Optional[float] = Field(default=UNSET, alias="companyId")
    """Lusha company ID this activity belongs to."""

    activity_publication_date: Optional[Date] = Field(default=UNSET, alias="activityPublicationDate")
    """Date the post was published."""

    signal_category: Optional[str] = Field(default=UNSET, alias="signalCategory")
    """Post classification."""

    intent_topics: Optional[list[LinkedinActivityIntentTopic]] = Field(default=UNSET, alias="intentTopics")
    """Detected Bombora topics and their category."""

    author: Optional[LinkedinActivityIntentPerson] = UNSET
    """A person referenced in a LinkedIn activity intent post (author or mention)."""

    contacts_mentioned: Optional[list[LinkedinActivityIntentPerson]] = Field(default=UNSET, alias="contactsMentioned")
    companies_mentioned: Optional[list[LinkedinActivityIntentCompanyMention]] = Field(
        default=UNSET, alias="companiesMentioned"
    )
    activity_url: Optional[str] = Field(default=UNSET, alias="activityUrl")
    """URL of the source post."""

    activity_summary: OptionalNullable[str] = Field(default=UNSET, alias="activitySummary")
    """AI-generated summary. Never contains the raw post text."""

    activity_likes: int = Field(default=0, alias="activityLikes")
    activity_comments: int = Field(default=0, alias="activityComments")
    activity_shares: int = Field(default=0, alias="activityShares")
    activity_type: Optional[str] = Field(default=UNSET, alias="activityType")


class LinkedinActivityIntentItemDict(TypedDict):
    company_id: NotRequired[float]
    activity_publication_date: NotRequired[Date]
    signal_category: NotRequired[str]
    intent_topics: NotRequired[list[LinkedinActivityIntentTopicDict]]
    author: NotRequired[LinkedinActivityIntentPersonDict]
    contacts_mentioned: NotRequired[list[LinkedinActivityIntentPersonDict]]
    companies_mentioned: NotRequired[list[LinkedinActivityIntentCompanyMentionDict]]
    activity_url: NotRequired[str]
    activity_summary: NotRequired[str | None]
    activity_likes: NotRequired[int]
    activity_comments: NotRequired[int]
    activity_shares: NotRequired[int]
    activity_type: NotRequired[str]
