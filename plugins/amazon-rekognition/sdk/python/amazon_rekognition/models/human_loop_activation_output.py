from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HumanLoopActivationOutput(SdkBaseModel):
    human_loop_arn: Optional[str] = Field(default=UNSET, alias="HumanLoopArn")
    """The Amazon Resource Name (ARN) of the HumanLoop created."""

    human_loop_activation_reasons: Optional[list[str]] = Field(default=UNSET, alias="HumanLoopActivationReasons")
    """Shows if and why human review was needed."""

    human_loop_activation_conditions_evaluation_results: Optional[str] = Field(
        default=UNSET, alias="HumanLoopActivationConditionsEvaluationResults"
    )
    """Shows the result of condition evaluations, including those conditions which activated a human review."""


class HumanLoopActivationOutputDict(TypedDict):
    human_loop_arn: NotRequired[str]
    human_loop_activation_reasons: NotRequired[list[str]]
    human_loop_activation_conditions_evaluation_results: NotRequired[str]
