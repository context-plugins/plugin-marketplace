from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PipelineCache(SdkBaseModel):
    """All Of object, pipeline_cache."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the pipeline cache."""

    pipeline_uuid: Optional[str] = UNSET
    """The UUID of the pipeline that created the cache."""

    step_uuid: Optional[str] = UNSET
    """The uuid of the step that created the cache."""

    name: Optional[str] = UNSET
    """The name of the cache."""

    key_hash: Optional[str] = UNSET
    """The key hash of the cache version."""

    path: Optional[str] = UNSET
    """The path where the cache contents were retrieved from."""

    file_size_bytes: Optional[int] = UNSET
    """The size of the file containing the archive of the cache."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the cache was created."""


class PipelineCacheDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    pipeline_uuid: NotRequired[str]
    step_uuid: NotRequired[str]
    name: NotRequired[str]
    key_hash: NotRequired[str]
    path: NotRequired[str]
    file_size_bytes: NotRequired[int]
    created_on: NotRequired[RFC3339DateTime]
