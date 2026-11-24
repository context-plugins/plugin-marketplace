from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetBuildBatchesInput(SdkBaseModel):
    ids: list[str]
    """An array that contains the batch build identifiers to retrieve."""


class BatchGetBuildBatchesInputDict(TypedDict):
    ids: list[str]
