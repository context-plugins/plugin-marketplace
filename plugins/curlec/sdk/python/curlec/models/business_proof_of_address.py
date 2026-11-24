from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BusinessProofOfAddress(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    document_id: Optional[str] = UNSET


class BusinessProofOfAddressDict(TypedDict):
    type_: NotRequired[str]
    document_id: NotRequired[str]
