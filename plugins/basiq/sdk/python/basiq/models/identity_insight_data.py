from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .identity_match import IdentityMatch, IdentityMatchDict


class IdentityInsightData(SdkBaseModel):
    name: Optional[IdentityMatch] = UNSET
    phone: Optional[IdentityMatch] = UNSET
    email: Optional[IdentityMatch] = UNSET
    address: Optional[IdentityMatch] = UNSET


class IdentityInsightDataDict(TypedDict):
    name: NotRequired[IdentityMatchDict]
    phone: NotRequired[IdentityMatchDict]
    email: NotRequired[IdentityMatchDict]
    address: NotRequired[IdentityMatchDict]
