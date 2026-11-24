from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.basis import BasisOrStr
from .enums.scale import ScaleOrStr


class KeyMetric(SdkBaseModel):
    name: Optional[str] = UNSET
    value: Optional[str] = UNSET
    """The figure exactly as the filing printed it — this is the string that was verified against the document, so a
    table in millions arrives as ``$19,345`` and a press-release line as ``$6.76 billion``. Use the three companions
    below to compute."""

    basis: Optional[BasisOrStr] = UNSET
    prior_year: OptionalNullable[str] = UNSET
    prior_quarter: OptionalNullable[str] = UNSET
    yoy_change: OptionalNullable[str] = UNSET
    qoq_change: OptionalNullable[str] = UNSET
    numeric: OptionalNullable[float] = UNSET
    """``value`` as a number at the face scale it was printed, sign applied (``$(5,396)`` → -5396). Null when ``value``
    carries no figure. The amount in base units is ``numeric`` × the ``scale`` multiplier (thousands 1e3, millions 1e6,
    billions 1e9)."""

    unit: OptionalNullable[str] = UNSET
    """ISO-style currency code (``USD``, ``EUR``, ``TWD``, ``CNY``, …), ``pct`` for a percentage, ``bp`` for basis
    points, null for a plain count (shares, units, multiples)."""

    scale: OptionalNullable[ScaleOrStr] = UNSET
    """The multiplier ``numeric`` is expressed in. Filled only when something in the filing says it: the printed value
    (``$6.76 billion``, ``$60,801 (In millions)``), the metric name, the row's own prior figure, the same amount printed
    with its unit in the filing's prose, or the filing's table header when it names one scale for its tables. Per-share
    and percentage figures are ``ones``; a per-unit metric (revenue per customer, a price per ounce) never takes a
    table's scale. Null means the filing did not say — treat ``numeric`` as unscaled at your own risk rather than assume
    millions. Added 2026-09-12; the rules were tightened and every stored read recomputed on 2026-10-01."""


class KeyMetricDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
    basis: NotRequired[BasisOrStr]
    prior_year: NotRequired[str | None]
    prior_quarter: NotRequired[str | None]
    yoy_change: NotRequired[str | None]
    qoq_change: NotRequired[str | None]
    numeric: NotRequired[float | None]
    unit: NotRequired[str | None]
    scale: NotRequired[ScaleOrStr | None]
