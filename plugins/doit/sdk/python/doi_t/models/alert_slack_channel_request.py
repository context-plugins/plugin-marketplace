from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AlertSlackChannelRequest(SdkBaseModel):
    """Slack destination selected for an alert. Exactly one of the two shapes is valid: a shared channel (``shared:
    true``, ``workspace`` omitted), or a workspace channel (``shared: false`` or omitted, ``workspace`` required). Any
    other combination is rejected with ``validation_failed``. Identity is id plus workspace/shared context. customerId
    defaults to the authenticated customer; an explicit mismatch is rejected. Service accounts can add public/shared
    destinations; new private destinations require a user credential with channel visibility."""

    id: str
    workspace: Optional[str] = UNSET
    """Connected workspace name returned by discovery. Required for a non-shared channel."""

    shared: bool = False
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")


class AlertSlackChannelRequestDict(TypedDict):
    id: str
    workspace: NotRequired[str]
    shared: NotRequired[bool]
    customer_id: NotRequired[str]
