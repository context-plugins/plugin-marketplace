from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.country import CountryOrStr
from .enums.currency import CurrencyOrStr
from .enums.kind import KindOrStr


class Result1(SdkBaseModel):
    ein: Optional[str] = UNSET
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Human-readable kind: Grantmaking foundation or Nonprofit."""

    kind: Optional[KindOrStr] = UNSET
    state: OptionalNullable[str] = UNSET
    """Two-letter postal code as filed: a US state, or a province or territory when ``country`` is ``CA``."""

    location: OptionalNullable[str] = UNSET
    """The SAME value as ``state``, under the name the first consumers of this endpoint used. Kept because it is in live
    clients; prefer ``state`` in new code."""

    cause: OptionalNullable[str] = UNSET
    """NTEE major-group label. Null wherever the BMF carries no NTEE code, which is common — parse permissively."""

    slug: OptionalNullable[str] = UNSET
    """URL slug for the organization's page. Null for organizations without a curated page."""

    href: OptionalNullable[str] = UNSET
    """Site-relative path to that page. ``url`` is the same target, absolute; prefer it outside this domain."""

    country: Optional[CountryOrStr] = UNSET
    """The register the row came from. Present on every row, so no result is currency-ambiguous."""

    currency: Optional[CurrencyOrStr] = UNSET
    """The currency ``revenue`` is in — the filing's own. Nothing in this dataset is converted, so figures from the two
    registers are never comparable and never additive."""

    revenue: OptionalNullable[int] = UNSET
    """Total revenue from the latest filing held, in the currency named by ``currency``. Here to disambiguate
    similarly-named organizations, and it gently weights the ranking; not a financial figure to cite — use /essentials
    or /premier for that."""

    score: OptionalNullable[float] = UNSET
    """Match strength; results are already ordered by it. Null on an exact-EIN lookup, which has no relevance score."""

    url: Optional[str] = UNSET
    """Absolute canonical URL of the organization's page — stable, and citable."""


class Result1Dict(TypedDict):
    ein: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
    kind: NotRequired[KindOrStr]
    state: NotRequired[str | None]
    location: NotRequired[str | None]
    cause: NotRequired[str | None]
    slug: NotRequired[str | None]
    href: NotRequired[str | None]
    country: NotRequired[CountryOrStr]
    currency: NotRequired[CurrencyOrStr]
    revenue: NotRequired[int | None]
    score: NotRequired[float | None]
    url: NotRequired[str]
