from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metafield import Metafield, MetafieldDict


class ObjectTypeCreate(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str
    singular: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    """Derived from ``title`` when omitted."""

    singleton: Optional[bool] = UNSET
    emoji: Optional[str] = UNSET
    metafields: Optional[list[Metafield]] = UNSET
    options: Optional[Any] = UNSET
    localization: bool = False
    locales: Optional[list[str]] = UNSET
    priority_locale: Optional[str] = UNSET


class ObjectTypeCreateDict(TypedDict):
    title: str
    singular: NotRequired[str]
    slug: NotRequired[str]
    singleton: NotRequired[bool]
    emoji: NotRequired[str]
    metafields: NotRequired[list[MetafieldDict]]
    options: NotRequired[Any]
    localization: NotRequired[bool]
    locales: NotRequired[list[str]]
    priority_locale: NotRequired[str]
