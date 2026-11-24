from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.call_status import CallStatusOrStr


class Call(SdkBaseModel):
    call_id: Optional[str] = Field(default=UNSET, alias="callId")
    status: Optional[CallStatusOrStr] = UNSET
    from_: Optional[str] = Field(default=UNSET, alias="from")
    """Plus sign followed by 7–15 digits."""

    to: Optional[str] = UNSET
    """The destination as requested — an E.164 number, a ``sip:`` URI, or an extension (trunk form)."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    originated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="originatedAt")
    answered_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="answeredAt")
    ended_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endedAt")
    duration_secs: OptionalNullable[int] = Field(default=UNSET, alias="durationSecs")
    cost_usd: OptionalNullable[str] = Field(default=UNSET, alias="costUsd")
    """Decimal string, e.g. "0.04"."""

    failure_code: OptionalNullable[str] = Field(default=UNSET, alias="failureCode")
    """Why the call failed. ``no_answer``, ``busy``, ``carrier_rejected``, ``invalid_number``, ``cancelled``,
    ``max_duration_exceeded``, or — for SIP destinations — ``invalid_destination``, ``endpoint_unreachable``,
    ``endpoint_rejected``."""

    sip_trunk_id: OptionalNullable[str] = Field(default=UNSET, alias="sipTrunkId")
    """The trunk used for this call. Null for PSTN calls and direct-URI SIP calls."""

    sip_uri: OptionalNullable[str] = Field(default=UNSET, alias="sipUri")
    """The normalized SIP URI actually dialed. Null for PSTN calls."""

    phone_book_exempt: Optional[bool] = Field(default=UNSET, alias="phoneBookExempt")
    """True when the call was placed outside the 8am–9pm window to a number in the account's Phone Book, so no
    tcpaOverride was needed."""

    metadata: Optional[Any] = UNSET


class CallDict(TypedDict):
    call_id: NotRequired[str]
    status: NotRequired[CallStatusOrStr]
    from_: NotRequired[str]
    to: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    originated_at: NotRequired[RFC3339DateTime | None]
    answered_at: NotRequired[RFC3339DateTime | None]
    ended_at: NotRequired[RFC3339DateTime | None]
    duration_secs: NotRequired[int | None]
    cost_usd: NotRequired[str | None]
    failure_code: NotRequired[str | None]
    sip_trunk_id: NotRequired[str | None]
    sip_uri: NotRequired[str | None]
    phone_book_exempt: NotRequired[bool]
    metadata: NotRequired[Any]
