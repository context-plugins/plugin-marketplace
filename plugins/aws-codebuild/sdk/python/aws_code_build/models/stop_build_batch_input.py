from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopBuildBatchInput(SdkBaseModel):
    id: str
    """The identifier of the batch build to stop."""


class StopBuildBatchInputDict(TypedDict):
    id: str
