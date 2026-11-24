from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.dialing_type import DialingTypeOrStr
from .enums.transport import TransportOrInt


class DidDestination1(SdkBaseModel):
    """Updated destination details"""

    id: int
    """Destination ID"""

    transport: TransportOrInt
    """Transport type: 1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone, 12 = WebSocket, 13 = SDK (rings the
    account of one of your SDK tokens; set up through the SDK, not through this API)"""

    destination: str
    """Forwarding target"""

    priority: int
    """Destination priority"""

    callhunt: bool
    """Whether callhunt is enabled"""

    dialing_type: DialingTypeOrStr
    """Dialing mode of the group this destination belongs to: ``sequence`` tries it alone, ``ring_all`` dials the whole
    group at once, ``random`` picks group members in a random order. Mirrors ``callhunt`` (``ring_all`` maps to
    true)."""

    active: bool
    """Whether destination is active"""

    ai_agent_id: int | None
    """Linked AI agent ID (null when the destination is not an AI agent)"""

    ai_agent_name: str | None
    """Linked AI agent name (null when the destination is not an AI agent)"""


class DidDestination1Dict(TypedDict):
    id: int
    transport: TransportOrInt
    destination: str
    priority: int
    callhunt: bool
    dialing_type: DialingTypeOrStr
    active: bool
    ai_agent_id: int | None
    ai_agent_name: str | None
