from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .human_loop_data_attributes import HumanLoopDataAttributes, HumanLoopDataAttributesDict


class HumanLoopConfig(SdkBaseModel):
    human_loop_name: str = Field(alias="HumanLoopName")
    """The name of the human review used for this image. This should be kept unique within a region."""

    flow_definition_arn: str = Field(alias="FlowDefinitionArn")
    """The Amazon Resource Name (ARN) of the flow definition. You can create a flow definition by using the Amazon
    Sagemaker CreateFlowDefinition Operation."""

    data_attributes: Optional[HumanLoopDataAttributes] = Field(default=UNSET, alias="DataAttributes")


class HumanLoopConfigDict(TypedDict):
    human_loop_name: str
    flow_definition_arn: str
    data_attributes: NotRequired[HumanLoopDataAttributesDict]
