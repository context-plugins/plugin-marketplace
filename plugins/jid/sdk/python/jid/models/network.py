from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.type_jid_qualify_api import TypeJidQualifyApiOrStr


class Network(SdkBaseModel):
    type_: Optional[TypeJidQualifyApiOrStr] = Field(default=UNSET, alias="type")
    asn: OptionalNullable[int] = UNSET
    source: Optional[str] = UNSET


class NetworkDict(TypedDict):
    type_: NotRequired[TypeJidQualifyApiOrStr]
    asn: NotRequired[int | None]
    source: NotRequired[str]
