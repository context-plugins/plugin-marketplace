from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SlackChannel(SdkBaseModel):
    """Information of a Slack channel for notifications. ``customerId`` and ``workspace`` are required unless ``shared``
    is true."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    id: str
    name: Optional[str] = UNSET
    shared: Optional[bool] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    workspace: Optional[str] = UNSET


class SlackChannelDict(TypedDict):
    customer_id: NotRequired[str]
    id: str
    name: NotRequired[str]
    shared: NotRequired[bool]
    type_: NotRequired[str]
    workspace: NotRequired[str]
