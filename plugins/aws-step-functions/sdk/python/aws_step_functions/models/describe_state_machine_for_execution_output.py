from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .logging_configuration import LoggingConfiguration, LoggingConfigurationDict
from .tracing_configuration import TracingConfiguration, TracingConfigurationDict


class DescribeStateMachineForExecutionOutput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine associated with the execution."""

    name: str
    """The name of the state machine associated with the execution."""

    definition: str
    """The Amazon States Language definition of the state machine. See Amazon States Language."""

    role_arn: str = Field(alias="roleArn")
    """The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution."""

    update_date: RFC3339DateTime = Field(alias="updateDate")
    """The date and time the state machine associated with an execution was updated. For a newly created state machine,
    this is the creation date."""

    logging_configuration: Optional[LoggingConfiguration] = Field(default=UNSET, alias="loggingConfiguration")
    tracing_configuration: Optional[TracingConfiguration] = Field(default=UNSET, alias="tracingConfiguration")
    map_run_arn: Optional[str] = Field(default=UNSET, alias="mapRunArn")
    """The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This field is returned
    only if the executionArn is a child workflow execution that was started by a Distributed Map state."""

    label: Optional[str] = UNSET
    """A user-defined or an auto-generated string that identifies a Map state. This field is returned only if the
    executionArn is a child workflow execution that was started by a Distributed Map state."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """The revision identifier for the state machine. The first revision ID when you create the state machine is null.
    Use the state machine revisionId parameter to compare the revision of a state machine with the configuration of the
    state machine used for executions without performing a diff of the properties, such as definition and roleArn."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="encryptionConfiguration")
    variable_references: Optional[dict[str, Any]] = Field(default=UNSET, alias="variableReferences")
    """A map of state name to a list of variables referenced by that state. States that do not use variable references
    will not be shown in the response."""


class DescribeStateMachineForExecutionOutputDict(TypedDict):
    state_machine_arn: str
    name: str
    definition: str
    role_arn: str
    update_date: RFC3339DateTime
    logging_configuration: NotRequired[LoggingConfigurationDict]
    tracing_configuration: NotRequired[TracingConfigurationDict]
    map_run_arn: NotRequired[str]
    label: NotRequired[str]
    revision_id: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
    variable_references: NotRequired[dict[str, Any]]
