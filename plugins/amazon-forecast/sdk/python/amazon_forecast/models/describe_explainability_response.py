from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_source import DataSource, DataSourceDict
from .explainability_config import ExplainabilityConfig, ExplainabilityConfigDict
from .schema import Schema, SchemaDict


class DescribeExplainabilityResponse(SdkBaseModel):
    explainability_arn: Optional[str] = Field(default=UNSET, alias="ExplainabilityArn")
    """The Amazon Resource Name (ARN) of the Explainability."""

    explainability_name: Optional[str] = Field(default=UNSET, alias="ExplainabilityName")
    """The name of the Explainability."""

    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability resource."""

    explainability_config: Optional[ExplainabilityConfig] = Field(default=UNSET, alias="ExplainabilityConfig")
    enable_visualization: Optional[bool] = Field(default=UNSET, alias="EnableVisualization")
    """Whether the visualization was enabled for the Explainability resource."""

    data_source: Optional[DataSource] = Field(default=UNSET, alias="DataSource")
    schema_value: Optional[Schema] = Field(default=UNSET, alias="Schema")
    start_date_time: Optional[str] = Field(default=UNSET, alias="StartDateTime")
    """If TimePointGranularity is set to SPECIFIC, the first time point in the Explainability."""

    end_date_time: Optional[str] = Field(default=UNSET, alias="EndDateTime")
    """If TimePointGranularity is set to SPECIFIC, the last time point in the Explainability."""

    estimated_time_remaining_in_minutes: Optional[int] = Field(default=UNSET, alias="EstimatedTimeRemainingInMinutes")
    """The estimated time remaining in minutes for the CreateExplainability job to complete."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, a message about the error."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the Explainability resource. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
    CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED"""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the Explainability resource was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""


class DescribeExplainabilityResponseDict(TypedDict):
    explainability_arn: NotRequired[str]
    explainability_name: NotRequired[str]
    resource_arn: NotRequired[str]
    explainability_config: NotRequired[ExplainabilityConfigDict]
    enable_visualization: NotRequired[bool]
    data_source: NotRequired[DataSourceDict]
    schema_value: NotRequired[SchemaDict]
    start_date_time: NotRequired[str]
    end_date_time: NotRequired[str]
    estimated_time_remaining_in_minutes: NotRequired[int]
    message: NotRequired[str]
    status: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
