from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .location_holder import LocationHolder, LocationHolderDict
from .name_count import NameCount, NameCountDict


class Journalist(SdkBaseModel):
    """Expanded journalist details, when requested and available."""

    id: OptionalNullable[str] = UNSET
    """Unique Perigon identifier for the journalist."""

    primary_record_id: OptionalNullable[str] = Field(default=UNSET, alias="primaryRecordId")
    name: OptionalNullable[str] = UNSET
    """Common display name of the journalist."""

    full_name: OptionalNullable[str] = Field(default=UNSET, alias="fullName")
    """Full name of the journalist."""

    headline: OptionalNullable[str] = UNSET
    """Professional headline associated with the journalist."""

    description: OptionalNullable[str] = UNSET
    """Biographical description of the journalist."""

    title: OptionalNullable[str] = UNSET
    """Professional title of the journalist."""

    email: OptionalNullable[str] = UNSET
    """Journalist's email."""

    locations: OptionalNullable[list[LocationHolder]] = UNSET
    """Locations associated with the journalist."""

    updated_at: OptionalNullable[str] = Field(default=UNSET, alias="updatedAt")
    """Date and time the journalist record was last refreshed, in ISO 8601 format."""

    top_topics: OptionalNullable[list[NameCount]] = Field(default=UNSET, alias="topTopics")
    """Topics most frequently covered by the journalist."""

    top_sources: OptionalNullable[list[NameCount]] = Field(default=UNSET, alias="topSources")
    """Publishers most frequently associated with the journalist."""

    top_categories: OptionalNullable[list[NameCount]] = Field(default=UNSET, alias="topCategories")
    """Categories most frequently covered by the journalist."""

    top_labels: OptionalNullable[list[NameCount]] = Field(default=UNSET, alias="topLabels")
    """Editorial labels most frequently associated with the journalist's articles."""

    top_countries: OptionalNullable[list[NameCount]] = Field(default=UNSET, alias="topCountries")
    """Countries most frequently associated with the journalist's articles."""

    avg_monthly_posts: OptionalNullable[int] = Field(default=UNSET, alias="avgMonthlyPosts")
    """Average number of articles published by the journalist per month."""

    twitter_handle: OptionalNullable[str] = Field(default=UNSET, alias="twitterHandle")
    """Journalist's X or Twitter handle."""

    twitter_bio: OptionalNullable[str] = Field(default=UNSET, alias="twitterBio")
    """Biography from the journalist's X or Twitter profile."""

    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    """Profile image URL for the journalist."""

    linkedin_url: OptionalNullable[str] = Field(default=UNSET, alias="linkedinUrl")
    """LinkedIn profile URL for the journalist."""

    linkedin_connections: OptionalNullable[int] = Field(default=UNSET, alias="linkedinConnections")
    """LinkedIn connection count for the journalist, when available."""

    linkedin_followers: OptionalNullable[int] = Field(default=UNSET, alias="linkedinFollowers")
    """LinkedIn follower count for the journalist, when available."""

    facebook_url: OptionalNullable[str] = Field(default=UNSET, alias="facebookUrl")
    """Facebook profile URL for the journalist."""

    instagram_url: OptionalNullable[str] = Field(default=UNSET, alias="instagramUrl")
    """Instagram profile URL for the journalist."""

    website_url: OptionalNullable[str] = Field(default=UNSET, alias="websiteUrl")
    """Personal or professional website URL for the journalist."""

    blog_url: OptionalNullable[str] = Field(default=UNSET, alias="blogUrl")
    """Blog URL for the journalist."""

    tumblr_url: OptionalNullable[str] = Field(default=UNSET, alias="tumblrUrl")
    """Tumblr profile URL for the journalist."""

    youtube_url: OptionalNullable[str] = Field(default=UNSET, alias="youtubeUrl")
    """YouTube channel URL for the journalist."""


class JournalistDict(TypedDict):
    id: NotRequired[str | None]
    primary_record_id: NotRequired[str | None]
    name: NotRequired[str | None]
    full_name: NotRequired[str | None]
    headline: NotRequired[str | None]
    description: NotRequired[str | None]
    title: NotRequired[str | None]
    email: NotRequired[str | None]
    locations: NotRequired[list[LocationHolderDict] | None]
    updated_at: NotRequired[str | None]
    top_topics: NotRequired[list[NameCountDict] | None]
    top_sources: NotRequired[list[NameCountDict] | None]
    top_categories: NotRequired[list[NameCountDict] | None]
    top_labels: NotRequired[list[NameCountDict] | None]
    top_countries: NotRequired[list[NameCountDict] | None]
    avg_monthly_posts: NotRequired[int | None]
    twitter_handle: NotRequired[str | None]
    twitter_bio: NotRequired[str | None]
    image_url: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    linkedin_connections: NotRequired[int | None]
    linkedin_followers: NotRequired[int | None]
    facebook_url: NotRequired[str | None]
    instagram_url: NotRequired[str | None]
    website_url: NotRequired[str | None]
    blog_url: NotRequired[str | None]
    tumblr_url: NotRequired[str | None]
    youtube_url: NotRequired[str | None]
