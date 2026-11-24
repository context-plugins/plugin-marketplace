from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BrokerageTaxes(SdkBaseModel):
    gst: Optional[float] = UNSET
    """GST charges"""

    stt: Optional[float] = UNSET
    """STT charges"""

    stamp_duty: Optional[float] = UNSET
    """Stamp duty charges"""


class BrokerageTaxesDict(TypedDict):
    gst: NotRequired[float]
    stt: NotRequired[float]
    stamp_duty: NotRequired[float]
