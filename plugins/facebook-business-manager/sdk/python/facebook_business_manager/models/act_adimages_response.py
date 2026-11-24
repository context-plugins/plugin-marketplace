from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActAdimagesResponse(SdkBaseModel):
    images: Optional[Any] = UNSET
    """Map of uploaded image details keyed by filename"""


class ActAdimagesResponseDict(TypedDict):
    images: NotRequired[Any]
