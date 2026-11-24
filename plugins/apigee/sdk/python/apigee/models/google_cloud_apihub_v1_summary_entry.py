from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity1 import Severity1OrStr


class GoogleCloudApihubV1SummaryEntry(SdkBaseModel):
    """Count of issues with a given severity."""

    severity: Optional[Severity1OrStr] = UNSET
    """Required. Severity of the issue."""

    count: Optional[int] = UNSET
    """Required. Count of issues with the given severity."""


class GoogleCloudApihubV1SummaryEntryDict(TypedDict):
    severity: NotRequired[Severity1OrStr]
    count: NotRequired[int]
