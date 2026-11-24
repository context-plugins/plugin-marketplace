from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.run_scope import RunScopeOrStr
from .table_owner import TableOwner, TableOwnerDict


class ColumnsRunRequest(SdkBaseModel):
    run_scope: RunScopeOrStr = Field(alias="runScope")
    """Controls which rows a column operation applies to. ``all`` re-runs every row, including already-processed ones.
    ``missing`` only runs rows that don't have a value for this column yet. ``specific`` requires ``entityIds``."""

    entity_ids: Optional[list[str]] = Field(default=UNSET, alias="entityIds")
    """Required when ``runScope`` is ``specific``."""

    owner: TableOwner
    """Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route
    call when authenticating with an API key (there is no signed-in user) — omitting it returns ``400``. Optional for
    OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on
    behalf of another owner."""


class ColumnsRunRequestDict(TypedDict):
    run_scope: RunScopeOrStr
    entity_ids: NotRequired[list[str]]
    owner: TableOwnerDict
