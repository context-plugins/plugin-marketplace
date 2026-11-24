from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class AlertSlackChannel(SdkBaseModel):
    """Eligible Slack destination returned by listAlertSlackChannels and echoed on alert responses. Name and type are
    canonical display metadata resolved server-side; values supplied on a request are ignored. Existing unavailable
    destinations may be retained or removed."""

    id: str
    workspace: Optional[str] = UNSET
    """Connected workspace name returned by discovery. Required for a non-shared channel."""

    shared: bool = False
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    name: Optional[str] = UNSET
    """Display name, resolved server-side."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Channel visibility, resolved server-side."""


class AlertSlackChannelDict(TypedDict):
    id: str
    workspace: NotRequired[str]
    shared: NotRequired[bool]
    customer_id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[TypeOrStr]
