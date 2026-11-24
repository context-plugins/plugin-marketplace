from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account1 import Account1, Account1Dict
from .pipeline_configuration_source import PipelineConfigurationSource, PipelineConfigurationSourceDict
from .pipeline_variable import PipelineVariable, PipelineVariableDict
from .pipelines_pipeline_links import PipelinesPipelineLinks, PipelinesPipelineLinksDict
from .repository_bitbucket_pipelines_api import RepositoryBitbucketPipelinesApi, RepositoryBitbucketPipelinesApiDict

if TYPE_CHECKING:
    from .unions.object import Object, ObjectDict


class Pipeline(SdkBaseModel):
    """All Of object, pipeline."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the pipeline."""

    build_number: Optional[int] = UNSET
    """The build number of the pipeline."""

    creator: Optional[Account1] = UNSET
    """The Bitbucket account that was used to create the pipeline."""

    repository: Optional[RepositoryBitbucketPipelinesApi] = UNSET
    target: Optional[Object] = UNSET
    """The target that the pipeline built."""

    trigger: Optional[Object] = UNSET
    """The trigger used for the pipeline."""

    state: Optional[Object] = UNSET
    variables: Optional[list[PipelineVariable]] = UNSET
    """The variables for the pipeline."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the pipeline was created."""

    completed_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress."""

    build_seconds_used: Optional[int] = UNSET
    """The number of build seconds used by this pipeline."""

    configuration_sources: Optional[list[PipelineConfigurationSource]] = UNSET
    """An ordered list of sources of the pipeline configuration"""

    links: Optional[PipelinesPipelineLinks] = UNSET


class PipelineDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    build_number: NotRequired[int]
    creator: NotRequired[Account1Dict]
    repository: NotRequired[RepositoryBitbucketPipelinesApiDict]
    target: NotRequired[ObjectDict]
    trigger: NotRequired[ObjectDict]
    state: NotRequired[ObjectDict]
    variables: NotRequired[list[PipelineVariableDict]]
    created_on: NotRequired[RFC3339DateTime]
    completed_on: NotRequired[RFC3339DateTime]
    build_seconds_used: NotRequired[int]
    configuration_sources: NotRequired[list[PipelineConfigurationSourceDict]]
    links: NotRequired[PipelinesPipelineLinksDict]
