from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OutputConfig(SdkBaseModel):
    s3_bucket: Optional[str] = Field(default=UNSET, alias="S3Bucket")
    """The S3 bucket where training output is placed."""

    s3_key_prefix: Optional[str] = Field(default=UNSET, alias="S3KeyPrefix")
    """The prefix applied to the training output files."""


class OutputConfigDict(TypedDict):
    s3_bucket: NotRequired[str]
    s3_key_prefix: NotRequired[str]
