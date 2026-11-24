from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ButtonBundleSocialConversationApi(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Literal["POSTBACK"] = Field(default="POSTBACK", alias="type")
    label: str
    payload: str


class ButtonBundleSocialConversationApiDict(TypedDict):
    id: NotRequired[str]
    type_: Literal["POSTBACK"]
    label: str
    payload: str
