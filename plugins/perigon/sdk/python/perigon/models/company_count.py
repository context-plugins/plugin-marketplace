from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CompanyCount(SdkBaseModel):
    """Companies associated with the story and their article counts."""

    id: OptionalNullable[str] = UNSET
    """Unique Perigon identifier for the company."""

    name: OptionalNullable[str] = UNSET
    """Company name."""

    domains: OptionalNullable[list[str]] = UNSET
    """Domains associated with the company."""

    symbols: OptionalNullable[list[str]] = UNSET
    """Stock symbols associated with the company."""

    count: OptionalNullable[int] = UNSET
    """Number of story articles mentioning the company."""


class CompanyCountDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str | None]
    domains: NotRequired[list[str] | None]
    symbols: NotRequired[list[str] | None]
    count: NotRequired[int | None]
