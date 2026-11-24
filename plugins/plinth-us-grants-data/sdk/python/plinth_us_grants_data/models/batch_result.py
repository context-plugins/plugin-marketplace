from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchResult(SdkBaseModel):
    i: int
    """Index of the request row this answers. Results are in request order, but a client should key on this rather than
    on position."""

    ein: Optional[str] = UNSET
    """The EIN the row resolved to, when it did."""

    name: Optional[str] = UNSET
    """The organization's name, when the row resolved."""

    field: str
    year: Optional[int] = UNSET
    value: Optional[Any] = UNSET
    """The answer. Null whenever ``status`` is not ``ok``, and sometimes when it is (a filer with no revenue line)."""

    status: str
    """ok · not_found · unresolved · ambiguous · upgrade · capped · unknown_field · invalid · error. Anything but ``ok``
    has a ``note``."""

    note: Optional[str] = UNSET
    candidates: Optional[list[Any]] = UNSET
    """On ``ambiguous``: the organizations the name matched, each with ein, name and state."""


class BatchResultDict(TypedDict):
    i: int
    ein: NotRequired[str]
    name: NotRequired[str]
    field: str
    year: NotRequired[int]
    value: NotRequired[Any]
    status: str
    note: NotRequired[str]
    candidates: NotRequired[list[Any]]
