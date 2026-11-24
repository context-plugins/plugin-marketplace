from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.dialing_type import DialingTypeOrStr
from .enums.transport2 import Transport2OrInt


class DidDestination(SdkBaseModel):
    """Created destination details"""

    id: int
    """Destination ID"""

    transport: Transport2OrInt
    """Transport type"""

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


class DidDestinationDict(TypedDict):
    id: int
    transport: Transport2OrInt
    destination: str
    priority: int
    callhunt: bool
    dialing_type: DialingTypeOrStr
    active: bool
    ai_agent_id: int | None
    ai_agent_name: str | None
