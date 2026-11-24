from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GroupUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    organization_guid: Optional[str] = UNSET
    bsds: Optional[list[str]] = UNSET


class GroupUpdateDict(TypedDict):
    name: NotRequired[str]
    organization_guid: NotRequired[str]
    bsds: NotRequired[list[str]]
