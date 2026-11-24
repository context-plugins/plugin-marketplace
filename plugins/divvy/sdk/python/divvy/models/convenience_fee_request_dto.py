from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConvenienceFeeRequestDto(SdkBaseModel):
    """DTO for convenience fee in invoice requests."""

    percentage: Optional[float] = UNSET
    """Convenience fee percentage"""


class ConvenienceFeeRequestDtoDict(TypedDict):
    percentage: NotRequired[float]
