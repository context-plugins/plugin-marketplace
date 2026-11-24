from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Company(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET


class CompanyDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
