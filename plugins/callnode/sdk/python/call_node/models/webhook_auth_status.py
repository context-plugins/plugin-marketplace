from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_callnode_io_phone_numbers_api import TypeCallnodeIoPhoneNumbersApiOrStr


class WebhookAuthStatus(SdkBaseModel):
    """How CallNode authenticates to your webhook. The secret itself is write-only and never returned."""

    type_: Optional[TypeCallnodeIoPhoneNumbersApiOrStr] = Field(default=UNSET, alias="type")
    header_name: Optional[str] = Field(default=UNSET, alias="headerName")
    value_set: Optional[bool] = Field(default=UNSET, alias="valueSet")


class WebhookAuthStatusDict(TypedDict):
    type_: NotRequired[TypeCallnodeIoPhoneNumbersApiOrStr]
    header_name: NotRequired[str]
    value_set: NotRequired[bool]
