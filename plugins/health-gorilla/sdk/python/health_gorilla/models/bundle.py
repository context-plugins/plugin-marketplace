from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entry import Entry, EntryDict
from .link import Link, LinkDict


class Bundle(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    type_: Optional[str] = Field(default=UNSET, alias="type")
    total: Optional[int] = UNSET
    link: Optional[list[Link]] = UNSET
    entry: Optional[list[Entry]] = UNSET


class BundleDict(TypedDict):
    resource_type: NotRequired[str]
    type_: NotRequired[str]
    total: NotRequired[int]
    link: NotRequired[list[LinkDict]]
    entry: NotRequired[list[EntryDict]]
