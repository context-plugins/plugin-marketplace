from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConvenienceFeeResponseDto(SdkBaseModel):
    """DTO for convenience fee in invoice responses."""

    percentage: Optional[float] = UNSET
    """Convenience fee percentage"""


class ConvenienceFeeResponseDtoDict(TypedDict):
    percentage: NotRequired[float]
