from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message import Message, MessageDict


class Step1(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Literal["SEND_MESSAGE"] = Field(default="SEND_MESSAGE", alias="type")
    message: Message


class Step1Dict(TypedDict):
    id: NotRequired[str]
    type_: Literal["SEND_MESSAGE"]
    message: MessageDict
