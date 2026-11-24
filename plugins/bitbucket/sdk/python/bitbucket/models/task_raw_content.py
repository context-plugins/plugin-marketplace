from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TaskRawContent(SdkBaseModel):
    """task raw content"""

    model_config = ConfigDict(extra="forbid")

    raw: str
    """The task contents"""


class TaskRawContentDict(TypedDict):
    raw: str
