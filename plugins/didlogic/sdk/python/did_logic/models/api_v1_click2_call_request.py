from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.a_type import ATypeOrStr


class ApiV1Click2CallRequest(SdkBaseModel):
    a_type: ATypeOrStr
    """Type of the agent leg. ``sip_account`` rings one of your SIP accounts; ``stream`` connects your own WebSocket
    endpoint first, where the account allows it."""

    a_endpoint: str
    """For ``sip_account``, the five-digit SIP account name from sipaccounts_index to ring first. For ``stream``, the
    public ``wss://`` URL of your endpoint, at most 2048 characters, dialled exactly as given. Your endpoint is sent
    ``start`` as soon as the socket opens and the leg is answered; the destination is dialled after that, and its pickup
    arrives as ``answered``."""

    b_number: str
    """Destination number in E.164, with or without the leading ``+``."""

    callback_url: str
    """Optional ``https`` URL on a public host, at most 255 characters. Every transition of this call is POSTed to it —
    see the description above."""

    client_call_id: str
    """Optional label of your own, echoed back on every surface that reports this call. At most 64 characters of
    ``A-Z``, ``a-z``, ``0-9``, ``_`` or ``-``. Not checked for uniqueness and never used to address the call."""

    a_cli: Optional[str] = UNSET
    """Optional caller ID shown on the agent leg instead of ``b_number``: E.164, at most 15 digits, with or without the
    leading ``+``. When present it must be valid — ``null`` or an empty string is refused, never ignored."""


class ApiV1Click2CallRequestDict(TypedDict):
    a_type: ATypeOrStr
    a_endpoint: str
    b_number: str
    callback_url: str
    client_call_id: str
    a_cli: NotRequired[str]
