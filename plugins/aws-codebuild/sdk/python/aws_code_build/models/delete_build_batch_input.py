from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteBuildBatchInput(SdkBaseModel):
    id: str
    """The identifier of the batch build to delete."""


class DeleteBuildBatchInputDict(TypedDict):
    id: str
