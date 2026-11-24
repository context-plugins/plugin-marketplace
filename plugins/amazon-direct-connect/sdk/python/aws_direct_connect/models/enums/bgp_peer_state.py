from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BgpPeerState(str, Enum):
    """The state of the BGP peer. The following are the possible values: verifying: The BGP peering addresses or ASN
    require validation before the BGP peer can be created. This state applies only to public virtual interfaces.
    pending: The BGP peer is created, and remains in this state until it is ready to be established. available: The BGP
    peer is ready to be established. deleting: The BGP peer is being deleted. deleted: The BGP peer is deleted and
    cannot be established."""

    VERIFYING = "verifying"
    PENDING = "pending"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

    __str__ = str.__str__


BgpPeerStateOrStr: TypeAlias = Annotated[BgpPeerState | str, open_enum_validator(BgpPeerState)]
