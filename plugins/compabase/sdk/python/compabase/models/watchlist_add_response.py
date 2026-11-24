from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class WatchlistAddResponse(SdkBaseModel):
    krs: str
    """Normalized 10-digit KRS."""

    entity_id: UUID
    """Internal company identifier."""

    already_following: bool
    """True if the company was already on the watchlist before this request."""

    created_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When the watchlist entry was created. Null when already_following is true and the original timestamp is
    unavailable."""

    dry_run: Optional[bool] = UNSET
    """Present and ``true`` only for ``dry_run=true`` requests — nothing was written."""

    would_add: Optional[bool] = UNSET
    """Only with ``dry_run=true`` — whether a real request would add the company."""


class WatchlistAddResponseDict(TypedDict):
    krs: str
    entity_id: UUID
    already_following: bool
    created_at: NotRequired[RFC3339DateTime | None]
    dry_run: NotRequired[bool]
    would_add: NotRequired[bool]
