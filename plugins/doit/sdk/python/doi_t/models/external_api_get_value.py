from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExternalApiGetValue(SdkBaseModel):
    """Single value entry used by some dimension endpoints."""

    cloud: Optional[str] = UNSET
    value: Optional[str] = UNSET


class ExternalApiGetValueDict(TypedDict):
    cloud: NotRequired[str]
    value: NotRequired[str]
