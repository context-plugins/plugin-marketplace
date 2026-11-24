from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source import DataSource, DataSourceDict
from .explainability_config import ExplainabilityConfig, ExplainabilityConfigDict
from .schema import Schema, SchemaDict
from .tag_model import TagModel, TagModelDict


class CreateExplainabilityRequest(SdkBaseModel):
    explainability_name: str = Field(alias="ExplainabilityName")
    """A unique name for the Explainability."""

    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability."""

    explainability_config: ExplainabilityConfig = Field(alias="ExplainabilityConfig")
    data_source: Optional[DataSource] = Field(default=UNSET, alias="DataSource")
    schema_value: Optional[Schema] = Field(default=UNSET, alias="Schema")
    enable_visualization: Optional[bool] = Field(default=UNSET, alias="EnableVisualization")
    """Create an Explainability visualization that is viewable within the Amazon Web Services console."""

    start_date_time: Optional[str] = Field(default=UNSET, alias="StartDateTime")
    """If TimePointGranularity is set to SPECIFIC, define the first point for the Explainability. Use the following
    timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)"""

    end_date_time: Optional[str] = Field(default=UNSET, alias="EndDateTime")
    """If TimePointGranularity is set to SPECIFIC, define the last time point for the Explainability. Use the following
    timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)"""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional
    value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags:
    For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per
    resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in
    UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your
    tagging schema is used across ot"""


class CreateExplainabilityRequestDict(TypedDict):
    explainability_name: str
    resource_arn: str
    explainability_config: ExplainabilityConfigDict
    data_source: NotRequired[DataSourceDict]
    schema_value: NotRequired[SchemaDict]
    enable_visualization: NotRequired[bool]
    start_date_time: NotRequired[str]
    end_date_time: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
