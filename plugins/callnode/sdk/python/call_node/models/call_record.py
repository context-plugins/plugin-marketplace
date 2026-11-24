from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.direction import DirectionOrStr
from .enums.status import StatusOrStr


class CallRecord(SdkBaseModel):
    """A finished or in-progress call on one of your numbers."""

    call_id: Optional[str] = Field(default=UNSET, alias="callId")
    """The call's uuid — matches ``X-CallNode-Call-Id`` on BYOC INVITEs."""

    direction: Optional[DirectionOrStr] = UNSET
    from_: Optional[str] = Field(default=UNSET, alias="from")
    to: Optional[str] = UNSET
    number: Optional[str] = UNSET
    """The CallNode number (E.164) the record belongs to."""

    status: Optional[StatusOrStr] = UNSET
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    end_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    duration_secs: Optional[int] = Field(default=UNSET, alias="durationSecs")
    end_reason: OptionalNullable[str] = Field(default=UNSET, alias="endReason")
    """CallNode's reason the call ended. Null = ordinary hangup."""

    sip_cause: OptionalNullable[str] = Field(default=UNSET, alias="sipCause")
    """SIP-level hangup cause of the caller leg (e.g. NORMAL_CLEARING)."""

    error_message: OptionalNullable[str] = Field(default=UNSET, alias="errorMessage")
    webhook_errors: Optional[int] = Field(default=UNSET, alias="webhookErrors")
    sip_trunk_id: OptionalNullable[str] = Field(default=UNSET, alias="sipTrunkId")
    """Set when the call arrived over one of your SIP trunks."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")


class CallRecordDict(TypedDict):
    call_id: NotRequired[str]
    direction: NotRequired[DirectionOrStr]
    from_: NotRequired[str]
    to: NotRequired[str]
    number: NotRequired[str]
    status: NotRequired[StatusOrStr]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime | None]
    duration_secs: NotRequired[int]
    end_reason: NotRequired[str | None]
    sip_cause: NotRequired[str | None]
    error_message: NotRequired[str | None]
    webhook_errors: NotRequired[int]
    sip_trunk_id: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
