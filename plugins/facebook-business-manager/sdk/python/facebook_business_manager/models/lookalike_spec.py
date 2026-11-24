from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LookalikeSpec(SdkBaseModel):
    """Specification for lookalike audiences"""

    origin_audience_id: Optional[str] = UNSET
    ratio: Optional[float] = UNSET
    country: Optional[str] = UNSET


class LookalikeSpecDict(TypedDict):
    origin_audience_id: NotRequired[str]
    ratio: NotRequired[float]
    country: NotRequired[str]
