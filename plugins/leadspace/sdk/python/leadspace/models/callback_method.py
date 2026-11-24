from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CallbackMethod(SdkBaseModel):
    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    polling_url: Optional[str] = Field(default=UNSET, alias="pollingUrl")


class CallbackMethodDict(TypedDict):
    callback_url: NotRequired[str]
    polling_url: NotRequired[str]
