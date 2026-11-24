from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MemberSecretItem(SdkBaseModel):
    id: UUID
    name: str
    value: Optional[str] = UNSET
    masked_value: Optional[str] = UNSET


class MemberSecretItemDict(TypedDict):
    id: UUID
    name: str
    value: NotRequired[str]
    masked_value: NotRequired[str]
