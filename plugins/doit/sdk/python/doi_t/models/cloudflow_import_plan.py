from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2 import Error2, Error2Dict
from .flows_to_create import FlowsToCreate, FlowsToCreateDict
from .requirement import Requirement, RequirementDict


class CloudflowImportPlan(SdkBaseModel):
    """Dry-run result — what an import of this request would do, with every validation issue reported at once."""

    valid: bool
    requirements: list[Requirement]
    flows_to_create: list[FlowsToCreate] = Field(alias="flowsToCreate")
    errors: list[Error2]


class CloudflowImportPlanDict(TypedDict):
    valid: bool
    requirements: list[RequirementDict]
    flows_to_create: list[FlowsToCreateDict]
    errors: list[Error2Dict]
