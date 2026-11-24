from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CompanyHolder(SdkBaseModel):
    """Companies most strongly associated with the story."""

    id: OptionalNullable[str] = UNSET
    """Unique Perigon identifier for the company."""

    name: OptionalNullable[str] = UNSET
    """Company name."""

    domains: OptionalNullable[list[str]] = UNSET
    """Domains associated with the company."""

    symbols: OptionalNullable[list[str]] = UNSET
    """Stock symbols associated with the company."""


class CompanyHolderDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str | None]
    domains: NotRequired[list[str] | None]
    symbols: NotRequired[list[str] | None]
