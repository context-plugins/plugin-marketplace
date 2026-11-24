from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Organization(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET


class OrganizationDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
