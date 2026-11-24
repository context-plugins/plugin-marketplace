from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.name_source import NameSourceOrStr
from .enums.type import TypeOrStr
from .enums.type_source import TypeSourceOrStr


class Seller(SdkBaseModel):
    """Available seller name and name-based classification. Unknown means the source does not supply enough evidence;
    damage, title and missing valuations do not establish seller type. Name-based classification is inferred, not a
    verified source category."""

    name: OptionalNullable[str] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    name_source: Optional[NameSourceOrStr] = UNSET
    type_source: Optional[TypeSourceOrStr] = UNSET
    type_is_inferred: Optional[bool] = UNSET


class SellerDict(TypedDict):
    name: NotRequired[str | None]
    type_: NotRequired[TypeOrStr]
    name_source: NotRequired[NameSourceOrStr]
    type_source: NotRequired[TypeSourceOrStr]
    type_is_inferred: NotRequired[bool]
