from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bedrock_knowledge_store_configuration import (
    BedrockKnowledgeStoreConfiguration,
    BedrockKnowledgeStoreConfigurationDict,
)
from .opensearch_configuration import OpensearchConfiguration, OpensearchConfigurationDict
from .qn_a_kendra_configuration import QnAKendraConfiguration, QnAKendraConfigurationDict


class DataSourceConfiguration(SdkBaseModel):
    opensearch_configuration: Optional[OpensearchConfiguration] = Field(default=UNSET, alias="opensearchConfiguration")
    kendra_configuration: Optional[QnAKendraConfiguration] = Field(default=UNSET, alias="kendraConfiguration")
    bedrock_knowledge_store_configuration: Optional[BedrockKnowledgeStoreConfiguration] = Field(
        default=UNSET, alias="bedrockKnowledgeStoreConfiguration"
    )


class DataSourceConfigurationDict(TypedDict):
    opensearch_configuration: NotRequired[OpensearchConfigurationDict]
    kendra_configuration: NotRequired[QnAKendraConfigurationDict]
    bedrock_knowledge_store_configuration: NotRequired[BedrockKnowledgeStoreConfigurationDict]
