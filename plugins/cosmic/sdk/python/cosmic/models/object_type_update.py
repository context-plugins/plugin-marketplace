from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metafield import Metafield, MetafieldDict


class ObjectTypeUpdate(SdkBaseModel):
    """Only the properties sent are changed. Sending ``metafields`` replaces the entire array."""

    model_config = ConfigDict(extra="forbid")

    title: Optional[str] = UNSET
    singular: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    singleton: Optional[bool] = UNSET
    emoji: Optional[str] = UNSET
    metafields: Optional[list[Metafield]] = UNSET
    options: Optional[Any] = UNSET
    localization: Optional[bool] = UNSET
    locales: Optional[list[str]] = UNSET
    priority_locale: Optional[str] = UNSET


class ObjectTypeUpdateDict(TypedDict):
    title: NotRequired[str]
    singular: NotRequired[str]
    slug: NotRequired[str]
    singleton: NotRequired[bool]
    emoji: NotRequired[str]
    metafields: NotRequired[list[MetafieldDict]]
    options: NotRequired[Any]
    localization: NotRequired[bool]
    locales: NotRequired[list[str]]
    priority_locale: NotRequired[str]
