from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr
from .enums.type import TypeOrStr


class Atom(SdkBaseModel):
    """A Boomi Atom — the lightweight runtime engine that executes integration processes."""

    id: Optional[str] = UNSET
    """Unique identifier of the Atom."""

    name: Optional[str] = UNSET
    """Display name of the Atom."""

    status: Optional[StatusOrStr] = UNSET
    """Current online/offline status of the Atom."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Atom type."""

    host_name: Optional[str] = Field(default=UNSET, alias="hostName")
    """Hostname of the machine running the Atom."""

    current_version: Optional[str] = Field(default=UNSET, alias="currentVersion")
    """Current Boomi runtime version installed on the Atom."""

    date_installed: Optional[RFC3339DateTime] = Field(default=UNSET, alias="dateInstalled")
    """Timestamp when the Atom was installed."""


class AtomDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    status: NotRequired[StatusOrStr]
    type_: NotRequired[TypeOrStr]
    host_name: NotRequired[str]
    current_version: NotRequired[str]
    date_installed: NotRequired[RFC3339DateTime]
