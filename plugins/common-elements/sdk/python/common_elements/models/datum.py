from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Datum(SdkBaseModel):
    state: Optional[str] = UNSET
    """Two-letter state code."""

    association_count: Optional[float] = UNSET
    """Associations in the state, summed across subtypes."""

    by_subtype: Optional[Any] = UNSET
    """Subtype to count, e.g. { "hoa": 51204, "condo": 27810 }."""

    insurance_licensee_count: Optional[float] = UNSET
    """Insurance licensees recorded in the state."""

    insurance_active_count: Optional[float] = UNSET
    """Of those, the ones recorded as active."""


class DatumDict(TypedDict):
    state: NotRequired[str]
    association_count: NotRequired[float]
    by_subtype: NotRequired[Any]
    insurance_licensee_count: NotRequired[float]
    insurance_active_count: NotRequired[float]
