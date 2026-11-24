from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_batch import BuildBatch, BuildBatchDict


class RetryBuildBatchOutput(SdkBaseModel):
    build_batch: Optional[BuildBatch] = Field(default=UNSET, alias="buildBatch")


class RetryBuildBatchOutputDict(TypedDict):
    build_batch: NotRequired[BuildBatchDict]
