from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_callnode_io_outbound_calls_api import TypeCallnodeIoOutboundCallsApiOrStr


class WebhookAuth(SdkBaseModel):
    """How CallNode authenticates to your webhook endpoint."""

    type_: TypeCallnodeIoOutboundCallsApiOrStr = Field(alias="type")
    header_name: Optional[str] = Field(default=UNSET, alias="headerName")
    """Header name when ``type`` is ``header``."""

    value: Optional[str] = UNSET
    """The secret, token, or ``user:pass`` pair, depending on ``type``."""


class WebhookAuthDict(TypedDict):
    type_: TypeCallnodeIoOutboundCallsApiOrStr
    header_name: NotRequired[str]
    value: NotRequired[str]
