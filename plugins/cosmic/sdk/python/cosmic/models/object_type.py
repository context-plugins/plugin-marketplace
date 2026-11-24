from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .metafield import Metafield, MetafieldDict
from .options import Options, OptionsDict


class ObjectType(SdkBaseModel):
    """The content model shared by every Object in the type."""

    id: Optional[str] = UNSET
    title: Optional[str] = UNSET
    singular: Optional[str] = UNSET
    """Singular label, used in dashboard copy such as "New Bike"."""

    slug: Optional[str] = UNSET
    """Unique within the Bucket. This is the value you pass as ``type`` when querying Objects."""

    singleton: Optional[bool] = UNSET
    """Whether the type holds exactly one Object, as for a home page."""

    emoji: Optional[str] = UNSET
    """Unicode emoji shown beside the type in the dashboard."""

    metafields: Optional[list[Metafield]] = UNSET
    options: Optional[Options] = UNSET
    localization: Optional[bool] = UNSET
    """Whether Objects in this type can exist in multiple locales."""

    locales: Optional[list[str]] = UNSET
    """Locale codes available in this type."""

    priority_locale: OptionalNullable[str] = UNSET
    """Default locale for new Objects in this type."""

    created_at: Optional[RFC3339DateTime] = UNSET
    modified_at: Optional[RFC3339DateTime] = UNSET


class ObjectTypeDict(TypedDict):
    id: NotRequired[str]
    title: NotRequired[str]
    singular: NotRequired[str]
    slug: NotRequired[str]
    singleton: NotRequired[bool]
    emoji: NotRequired[str]
    metafields: NotRequired[list[MetafieldDict]]
    options: NotRequired[OptionsDict]
    localization: NotRequired[bool]
    locales: NotRequired[list[str]]
    priority_locale: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
    modified_at: NotRequired[RFC3339DateTime]
