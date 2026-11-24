from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Price4(SdkBaseModel):
    """Product price (present when ``type`` is ``SHOPPING``). ``currency`` and ``raw`` are always present; ``value`` is
    omitted when the number doesn't parse, and the whole object is omitted when no currency appears beside a number.
    ``raw`` carries the visible text verbatim."""

    value: Optional[float] = UNSET
    """Numeric price value"""

    currency: Optional[str] = UNSET
    """Currency symbol"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class Price4Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
