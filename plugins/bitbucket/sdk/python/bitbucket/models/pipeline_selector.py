from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_bitbucket_pipelines_api import TypeBitbucketPipelinesApiOrStr


class PipelineSelector(SdkBaseModel):
    """All Of object, pipeline_selector."""

    type_: Optional[TypeBitbucketPipelinesApiOrStr] = Field(default=UNSET, alias="type")
    """The type of selector."""

    pattern: Optional[str] = UNSET
    """The name of the matching pipeline definition."""


class PipelineSelectorDict(TypedDict):
    type_: NotRequired[TypeBitbucketPipelinesApiOrStr]
    pattern: NotRequired[str]
