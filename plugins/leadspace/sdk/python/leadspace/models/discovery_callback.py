from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .callback_method import CallbackMethod, CallbackMethodDict


class DiscoveryCallback(SdkBaseModel):
    bulk_id: Optional[str] = Field(default=UNSET, alias="bulkId")
    callback_method: Optional[CallbackMethod] = Field(default=UNSET, alias="callbackMethod")
    bulk_status: Optional[str] = Field(default=UNSET, alias="bulkStatus")


class DiscoveryCallbackDict(TypedDict):
    bulk_id: NotRequired[str]
    callback_method: NotRequired[CallbackMethodDict]
    bulk_status: NotRequired[str]
