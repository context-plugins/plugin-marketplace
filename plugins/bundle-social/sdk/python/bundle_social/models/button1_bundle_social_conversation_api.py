from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Button1BundleSocialConversationApi(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Literal["URL"] = Field(default="URL", alias="type")
    label: str
    url: str


class Button1BundleSocialConversationApiDict(TypedDict):
    id: NotRequired[str]
    type_: Literal["URL"]
    label: str
    url: str
