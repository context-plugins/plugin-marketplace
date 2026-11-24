from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DomainConfiguration(SdkBaseModel):
    workflow_execution_retention_period_in_days: str = Field(alias="workflowExecutionRetentionPeriodInDays")
    """The retention period for workflow executions in this domain."""


class DomainConfigurationDict(TypedDict):
    workflow_execution_retention_period_in_days: str
