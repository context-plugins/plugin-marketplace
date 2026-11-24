from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bedrock_model_specification import BedrockModelSpecification, BedrockModelSpecificationDict
from .data_source_configuration import DataSourceConfiguration, DataSourceConfigurationDict


class QnAIntentConfiguration(SdkBaseModel):
    data_source_configuration: Optional[DataSourceConfiguration] = Field(default=UNSET, alias="dataSourceConfiguration")
    bedrock_model_configuration: Optional[BedrockModelSpecification] = Field(
        default=UNSET, alias="bedrockModelConfiguration"
    )


class QnAIntentConfigurationDict(TypedDict):
    data_source_configuration: NotRequired[DataSourceConfigurationDict]
    bedrock_model_configuration: NotRequired[BedrockModelSpecificationDict]
