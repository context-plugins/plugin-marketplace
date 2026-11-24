from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .network import Network, NetworkDict
from .unions.consistent import Consistent, ConsistentDict


class LocationJidScreenApi(SdkBaseModel):
    """Present when location inputs were given"""

    consistent: Optional[Consistent] = UNSET
    """true, false or "unknown"
    """

    reference: OptionalNullable[Any] = UNSET
    signals: Optional[list[Any]] = UNSET
    network: Optional[Network] = UNSET
    detail: Optional[str] = UNSET


class LocationJidScreenApiDict(TypedDict):
    consistent: NotRequired[ConsistentDict]
    reference: NotRequired[Any | None]
    signals: NotRequired[list[Any]]
    network: NotRequired[NetworkDict]
    detail: NotRequired[str]
