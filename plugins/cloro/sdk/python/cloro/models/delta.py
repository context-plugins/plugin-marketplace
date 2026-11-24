from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content import Content, ContentDict


class Delta(SdkBaseModel):
    """Streaming delta payload from ChatGPT"""

    content: Optional[list[Content]] = UNSET


class DeltaDict(TypedDict):
    content: NotRequired[list[ContentDict]]
