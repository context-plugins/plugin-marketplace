from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Data4(SdkBaseModel):
    best: OptionalNullable[Any] = UNSET
    """The best source on file (lowest priority value), with the same fields as a ``sources`` row. Null when no public
    record names a management company."""

    sources: Optional[list[Any]] = UNSET
    """Every source, best first: manager_name, source, priority (lower is stronger), provenance, inferred (true when we
    matched the firm, for example by a licensed firm's office or email domain, rather than a filing naming it), and
    manager_org_id (the firm's Common Elements org id where the source links one, else null)."""

    managers: Optional[list[Any]] = UNSET
    """The same rows as ``sources``, kept for existing integrations. Best first."""

    confirmed_relationships: Optional[list[Any]] = UNSET
    """Platform-confirmed management edges: to_org_id (the management company's org id), relationship_type
    ("managed_by"), status, start_date, end_date, contract_value."""


class Data4Dict(TypedDict):
    best: NotRequired[Any | None]
    sources: NotRequired[list[Any]]
    managers: NotRequired[list[Any]]
    confirmed_relationships: NotRequired[list[Any]]
