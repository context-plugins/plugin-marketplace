from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_column_value import EntityColumnValue, EntityColumnValueDict


class TableEntity(SdkBaseModel):
    """A single row. ``id`` is the **encrypted** Lusha ID (``v{N}.…``) — ``personId`` for contacts, ``lushaCompanyId``
    for companies — in the same format used across V3, so it round-trips directly into Add Entities, Remove Entities,
    and Enrich. Internal fields (``accountId``, ``companyLid``, ``lushaCompanyId``, ``personId``, ``companyDetails``)
    are not returned. Remaining per-row fields under ``columns`` are owned by the Workspace service; this shape is
    representative, not an exhaustive schema."""

    id: Optional[str] = UNSET
    """Encrypted Lusha ID."""

    columns: Optional[list[EntityColumnValue]] = UNSET


class TableEntityDict(TypedDict):
    id: NotRequired[str]
    columns: NotRequired[list[EntityColumnValueDict]]
