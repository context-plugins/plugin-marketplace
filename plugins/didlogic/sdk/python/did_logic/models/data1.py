from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.reason import ReasonOrStr
from .enums.state1 import State1OrStr


class Data1(SdkBaseModel):
    """The Click2Call call resource"""

    id: str
    """Call ID (26-character ULID)"""

    state: State1OrStr
    """How far the call got. ``agent_ringing`` may be skipped — see the description above."""

    reason: ReasonOrStr | None
    """Why the call ended. ``null`` while the call is live and on a normal end."""

    a_type: str
    """Type of the agent leg. Always ``sip_account`` in v1."""

    a_endpoint: str
    """The SIP account that was rung first"""

    b_number: str
    """Destination number, digits only"""

    b_cli: str | None
    """Always ``null`` in v1"""

    created_at: str
    """When the call was placed. The 12-hour retention window runs from here."""

    agent_ringing_at: str | None
    """When the agent leg started ringing. Best-effort: ``null`` when the phone never reported the ring, not only when
    it never rang."""

    agent_answered_at: str | None
    """When the agent leg answered"""

    customer_ringing_at: str | None
    """When the destination was dialled"""

    bridged_at: str | None
    """When the two legs were bridged"""

    ended_at: str | None
    """When the call ended"""

    duration: int | None
    """Whole life of the call in seconds, ringing included. Not the billed time."""

    cost: str | None
    """Total cost in dollars, four decimals"""

    finalized_at: str | None
    """When the billed record was committed. ``null`` until then, and until it is set ``cost`` may still be ``null``."""

    recording_url: str | None
    """Where the recording of the call can be downloaded. ``null`` when the call was not recorded, and ``null`` on a
    call that has not settled yet. By default the link is signed and expires one hour after it was minted; each read of
    the call mints a fresh one, and ``GET /api/v1/calls/recording/{callid}`` also gives one. If the account has
    permanent recording links enabled (on request through your account manager or support), the field holds a permanent
    ``/api/v1/recordings/{user_id}/{token}`` URL instead. It does not expire while the recording is retained and the
    option stays on."""

    client_call_id: str | None
    """The label you supplied when placing the call, echoed back unchanged. ``null`` when none was supplied. Carried on
    every webhook for this call."""

    a_cli: str | None
    """The caller ID the agent leg was presented with, digits only: the ``a_cli`` you supplied, or ``b_number`` when you
    supplied none. Carried on every webhook for this call."""


class Data1Dict(TypedDict):
    id: str
    state: State1OrStr
    reason: ReasonOrStr | None
    a_type: str
    a_endpoint: str
    b_number: str
    b_cli: str | None
    created_at: str
    agent_ringing_at: str | None
    agent_answered_at: str | None
    customer_ringing_at: str | None
    bridged_at: str | None
    ended_at: str | None
    duration: int | None
    cost: str | None
    finalized_at: str | None
    recording_url: str | None
    client_call_id: str | None
    a_cli: str | None
