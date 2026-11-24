from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OldPrice2(SdkBaseModel):
    """Original price before discount (present when ``type`` is ``SHOPPING`` and the ad has sale pricing). Same shape as
    ``price``."""

    value: Optional[float] = UNSET
    """Numeric price value"""

    currency: Optional[str] = UNSET
    """Currency symbol"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class OldPrice2Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
