from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WaitOperationRequest(SdkBaseModel):
    """The request message for Operations.WaitOperation."""

    timeout: Optional[str] = UNSET
    """The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the
    underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used."""


class WaitOperationRequestDict(TypedDict):
    timeout: NotRequired[str]
