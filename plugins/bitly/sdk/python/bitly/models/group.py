from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Group(SdkBaseModel):
    references: Optional[dict[str, str]] = UNSET
    name: str
    guid: str
    created: str
    modified: str
    is_active: bool
    role: str
    organization_guid: str
    bsds: list[str]


class GroupDict(TypedDict):
    references: NotRequired[dict[str, str]]
    name: str
    guid: str
    created: str
    modified: str
    is_active: bool
    role: str
    organization_guid: str
    bsds: list[str]
