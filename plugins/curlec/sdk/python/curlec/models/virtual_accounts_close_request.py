from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class VirtualAccountsCloseRequest(SdkBaseModel):
    status: Literal["closed"] = "closed"
    """Must be 'closed' to close the account."""


class VirtualAccountsCloseRequestDict(TypedDict):
    status: Literal["closed"]
