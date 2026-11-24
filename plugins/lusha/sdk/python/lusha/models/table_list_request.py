from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr
from .table_owner import TableOwner, TableOwnerDict


class TableListRequest(SdkBaseModel):
    owner: TableOwner
    """Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route
    call when authenticating with an API key (there is no signed-in user) — omitting it returns ``400``. Optional for
    OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on
    behalf of another owner."""

    page: int = 0
    size: int = 100
    name: Optional[str] = UNSET
    """Optional filter — matches tables whose name contains this text."""

    status: Optional[Status1OrStr] = UNSET
    """``deleted`` is not a filterable status."""


class TableListRequestDict(TypedDict):
    owner: TableOwnerDict
    page: NotRequired[int]
    size: NotRequired[int]
    name: NotRequired[str]
    status: NotRequired[Status1OrStr]
