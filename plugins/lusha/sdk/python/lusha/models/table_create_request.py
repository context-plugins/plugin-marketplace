from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.visibility import Visibility, VisibilityOrStr
from .table_owner import TableOwner, TableOwnerDict


class TableCreateRequest(SdkBaseModel):
    name: str
    visibility: VisibilityOrStr = Visibility.PRIVATE
    owner: TableOwner
    """Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route
    call when authenticating with an API key (there is no signed-in user) — omitting it returns ``400``. Optional for
    OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on
    behalf of another owner."""

    ids: Optional[list[str]] = UNSET
    """Optional initial entity IDs to seed the table with."""


class TableCreateRequestDict(TypedDict):
    name: str
    visibility: NotRequired[VisibilityOrStr]
    owner: TableOwnerDict
    ids: NotRequired[list[str]]
