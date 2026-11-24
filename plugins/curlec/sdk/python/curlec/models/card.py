from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.input_type import InputTypeOrStr


class Card(SdkBaseModel):
    last4: Optional[str] = UNSET
    network: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    issuer: Optional[str] = UNSET
    input_type: Optional[InputTypeOrStr] = UNSET


class CardDict(TypedDict):
    last4: NotRequired[str]
    network: NotRequired[str]
    type_: NotRequired[str]
    issuer: NotRequired[str]
    input_type: NotRequired[InputTypeOrStr]
