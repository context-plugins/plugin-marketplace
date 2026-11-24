from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_batch import BuildBatch, BuildBatchDict


class BatchGetBuildBatchesOutput(SdkBaseModel):
    build_batches: Optional[list[BuildBatch]] = Field(default=UNSET, alias="buildBatches")
    """An array of BuildBatch objects that represent the retrieved batch builds."""

    build_batches_not_found: Optional[list[str]] = Field(default=UNSET, alias="buildBatchesNotFound")
    """An array that contains the identifiers of any batch builds that are not found."""


class BatchGetBuildBatchesOutputDict(TypedDict):
    build_batches: NotRequired[list[BuildBatchDict]]
    build_batches_not_found: NotRequired[list[str]]
