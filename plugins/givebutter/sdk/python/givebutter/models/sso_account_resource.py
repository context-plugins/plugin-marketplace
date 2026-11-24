from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SsoAccountResource(SdkBaseModel):
    id: str
    name: str
    logo: str
    cover: str
    tagline: str
    description: str
    slug: str
    url: str
    phone: str
    email: str
    website: str
    facebook: str
    linkedin: str
    twitter: str
    snapchat: str
    instagram: str
    tiktok: str
    youtube: str
    created_at: str
    updated_at: str
    last_campaign_id: str


class SsoAccountResourceDict(TypedDict):
    id: str
    name: str
    logo: str
    cover: str
    tagline: str
    description: str
    slug: str
    url: str
    phone: str
    email: str
    website: str
    facebook: str
    linkedin: str
    twitter: str
    snapchat: str
    instagram: str
    tiktok: str
    youtube: str
    created_at: str
    updated_at: str
    last_campaign_id: str
