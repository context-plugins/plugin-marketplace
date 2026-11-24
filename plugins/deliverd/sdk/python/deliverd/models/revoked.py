from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_deliverd_dev_audiences_api import TypeDeliverdDevAudiencesApiOrStr


class Revoked(SdkBaseModel):
    type_: TypeDeliverdDevAudiencesApiOrStr = Field(alias="type")
    id: UUID | None
    value: Optional[str] = UNSET
    label: Optional[str] = UNSET


class RevokedDict(TypedDict):
    type_: TypeDeliverdDevAudiencesApiOrStr
    id: UUID | None
    value: NotRequired[str]
    label: NotRequired[str]
