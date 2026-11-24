from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.send_status import SendStatusOrStr
from .enums.send_status_reason_code1 import SendStatusReasonCode1OrStr


class BatchSendStatusResult(SdkBaseModel):
    """Delivery status for one requested send."""

    model_config = ConfigDict(extra="forbid")

    send_id: str = Field(alias="sendId")
    """The ``sendId`` this result is for, echoed from the request."""

    status: SendStatusOrStr
    """Delivery status of a send. ``not_found`` means no send with this id exists on the campaign, including a send that
    has not been processed yet."""

    reason: Optional[str] = UNSET
    """Readable explanation for why this send was dropped or failed. Present when ``status`` is ``"dropped"`` or
    ``"failed"``."""

    reason_code: Optional[SendStatusReasonCode1OrStr] = Field(default=UNSET, alias="reasonCode")
    """Stable code for ``reason``. Present whenever ``reason`` is."""

    updated_at: Optional[str] = Field(default=UNSET, alias="updatedAt")
    """ISO 8601 time the status last changed. Absent when ``status`` is ``"not_found"``."""


class BatchSendStatusResultDict(TypedDict):
    send_id: str
    status: SendStatusOrStr
    reason: NotRequired[str]
    reason_code: NotRequired[SendStatusReasonCode1OrStr]
    updated_at: NotRequired[str]
