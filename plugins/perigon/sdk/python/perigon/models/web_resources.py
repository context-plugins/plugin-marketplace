from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WebResources(SdkBaseModel):
    careers: OptionalNullable[str] = UNSET
    about: OptionalNullable[str] = UNSET
    blog: OptionalNullable[str] = UNSET
    events: OptionalNullable[str] = UNSET
    sitemap: OptionalNullable[str] = UNSET
    updates: OptionalNullable[str] = UNSET
    linkedin: OptionalNullable[str] = UNSET
    facebook: OptionalNullable[str] = UNSET
    instagram: OptionalNullable[str] = UNSET
    medium: OptionalNullable[str] = UNSET
    reddit: OptionalNullable[str] = UNSET
    threads: OptionalNullable[str] = UNSET
    tiktok: OptionalNullable[str] = UNSET
    x: OptionalNullable[str] = UNSET
    wellfound: OptionalNullable[str] = UNSET
    youtube: OptionalNullable[str] = UNSET
    wikipedia: OptionalNullable[str] = UNSET


class WebResourcesDict(TypedDict):
    careers: NotRequired[str | None]
    about: NotRequired[str | None]
    blog: NotRequired[str | None]
    events: NotRequired[str | None]
    sitemap: NotRequired[str | None]
    updates: NotRequired[str | None]
    linkedin: NotRequired[str | None]
    facebook: NotRequired[str | None]
    instagram: NotRequired[str | None]
    medium: NotRequired[str | None]
    reddit: NotRequired[str | None]
    threads: NotRequired[str | None]
    tiktok: NotRequired[str | None]
    x: NotRequired[str | None]
    wellfound: NotRequired[str | None]
    youtube: NotRequired[str | None]
    wikipedia: NotRequired[str | None]
