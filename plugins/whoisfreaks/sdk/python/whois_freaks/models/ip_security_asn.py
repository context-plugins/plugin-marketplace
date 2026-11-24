from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpSecurityAsn(SdkBaseModel):
    as_number: Optional[str] = UNSET
    organization: Optional[str] = UNSET
    country: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    domain: Optional[str] = UNSET
    date_allocated: Optional[str] = UNSET
    rir: Optional[str] = UNSET


class IpSecurityAsnDict(TypedDict):
    as_number: NotRequired[str]
    organization: NotRequired[str]
    country: NotRequired[str]
    type_: NotRequired[str]
    domain: NotRequired[str]
    date_allocated: NotRequired[str]
    rir: NotRequired[str]
