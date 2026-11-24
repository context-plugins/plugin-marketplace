from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Price6(SdkBaseModel):
    """Price as displayed. ``raw`` is always present; ``value`` and ``currency`` are omitted when they can't be parsed,
    never sent as ``null``."""

    value: Optional[float] = UNSET
    """Numeric price"""

    currency: Optional[str] = UNSET
    """Currency symbol or word as displayed (e.g. ``$``, ``R$``)"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class Price6Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
