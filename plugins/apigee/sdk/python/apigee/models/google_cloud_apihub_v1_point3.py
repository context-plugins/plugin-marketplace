from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Point3(SdkBaseModel):
    """Required. Start of the issue."""

    line: Optional[int] = UNSET
    """Required. Line number (zero-indexed)."""

    character: Optional[int] = UNSET
    """Required. Character position within the line (zero-indexed)."""


class GoogleCloudApihubV1Point3Dict(TypedDict):
    line: NotRequired[int]
    character: NotRequired[int]
