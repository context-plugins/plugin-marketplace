from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MediaUpdate(SdkBaseModel):
    """Only the properties sent are changed. The underlying file cannot be replaced through this endpoint."""

    model_config = ConfigDict(extra="forbid")

    folder: Optional[str] = UNSET
    alt_text: Optional[str] = UNSET
    """Images only."""

    metadata: Optional[Any] = UNSET
    trigger_webhook: Optional[bool] = UNSET


class MediaUpdateDict(TypedDict):
    folder: NotRequired[str]
    alt_text: NotRequired[str]
    metadata: NotRequired[Any]
    trigger_webhook: NotRequired[bool]
