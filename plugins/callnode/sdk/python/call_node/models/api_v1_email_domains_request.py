from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1EmailDomainsRequest(SdkBaseModel):
    domain: str
    """The hostname you will send from, e.g. ``mail.acme.com``. Ours and public mailbox providers are refused."""


class ApiV1EmailDomainsRequestDict(TypedDict):
    domain: str
