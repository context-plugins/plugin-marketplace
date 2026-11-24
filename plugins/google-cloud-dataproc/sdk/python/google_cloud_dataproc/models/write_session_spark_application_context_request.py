from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spark_wrapper_object import SparkWrapperObject, SparkWrapperObjectDict


class WriteSessionSparkApplicationContextRequest(SdkBaseModel):
    """Write Spark Application data to internal storage systems"""

    parent: Optional[str] = UNSET
    """Required. Parent (Batch) resource reference."""

    spark_wrapper_objects: Optional[list[SparkWrapperObject]] = Field(default=UNSET, alias="sparkWrapperObjects")
    """Required. The batch of spark application context objects sent for ingestion."""


class WriteSessionSparkApplicationContextRequestDict(TypedDict):
    parent: NotRequired[str]
    spark_wrapper_objects: NotRequired[list[SparkWrapperObjectDict]]
