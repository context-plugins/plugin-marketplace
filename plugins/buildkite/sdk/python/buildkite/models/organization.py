from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Organization(SdkBaseModel):
    slug: Optional[str] = UNSET


class OrganizationDict(TypedDict):
    slug: NotRequired[str]
