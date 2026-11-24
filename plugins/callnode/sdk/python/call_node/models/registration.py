from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.transport import TransportOrStr


class Registration(SdkBaseModel):
    """Registration-trunk settings, for a PBX with no static public IP. Never contains the password or its digest."""

    enabled: Optional[bool] = UNSET
    """Whether this trunk authenticates by registration rather than by source IP."""

    username: OptionalNullable[str] = UNSET
    """The SIP username your PBX registers with."""

    domain: Optional[str] = UNSET
    """SIP domain / digest realm."""

    server: Optional[str] = UNSET
    """Host and port your PBX registers to."""

    transport: Optional[TransportOrStr] = UNSET
    """Registration trunks are TLS-only."""

    password_set_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="passwordSetAt")
    registered: Optional[bool] = UNSET
    """True when your PBX is registered right now."""

    last_registered_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastRegisteredAt")
    last_registered_ip: OptionalNullable[str] = Field(default=UNSET, alias="lastRegisteredIp")
    """The address your PBX last registered from."""


class RegistrationDict(TypedDict):
    enabled: NotRequired[bool]
    username: NotRequired[str | None]
    domain: NotRequired[str]
    server: NotRequired[str]
    transport: NotRequired[TransportOrStr]
    password_set_at: NotRequired[RFC3339DateTime | None]
    registered: NotRequired[bool]
    last_registered_at: NotRequired[RFC3339DateTime | None]
    last_registered_ip: NotRequired[str | None]
