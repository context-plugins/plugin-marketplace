from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rca_priority_dto import RcaPriorityDtoOrStr


class PublicApiRcaRemediationItemDto(SdkBaseModel):
    action: str
    priority: Optional[RcaPriorityDtoOrStr] = UNSET


class PublicApiRcaRemediationItemDtoDict(TypedDict):
    action: str
    priority: NotRequired[RcaPriorityDtoOrStr]
