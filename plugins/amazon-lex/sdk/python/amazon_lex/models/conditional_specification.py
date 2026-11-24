from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .conditional_branch import ConditionalBranch, ConditionalBranchDict
from .default_conditional_branch import DefaultConditionalBranch, DefaultConditionalBranchDict


class ConditionalSpecification(SdkBaseModel):
    active: bool
    """Determines whether a conditional branch is active. When active is false, the conditions are not evaluated."""

    conditional_branches: list[ConditionalBranch] = Field(alias="conditionalBranches")
    """A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The
    response and next step are executed when the condition is true."""

    default_branch: DefaultConditionalBranch = Field(alias="defaultBranch")


class ConditionalSpecificationDict(TypedDict):
    active: bool
    conditional_branches: list[ConditionalBranchDict]
    default_branch: DefaultConditionalBranchDict
