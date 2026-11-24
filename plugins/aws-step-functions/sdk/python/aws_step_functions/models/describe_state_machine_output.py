from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .enums.status2 import Status2OrStr
from .enums.type2 import Type2OrStr
from .logging_configuration import LoggingConfiguration, LoggingConfigurationDict
from .tracing_configuration import TracingConfiguration, TracingConfigurationDict


class DescribeStateMachineOutput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) that identifies the state machine. If you specified a state machine version ARN in
    your request, the API returns the version ARN. The version ARN is a combination of state machine ARN and the version
    number separated by a colon (:). For example, stateMachineARN:1."""

    name: str
    r"""The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard characters ? *
    special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates
    (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain
    0-9, A-Z, a-z, - and _."""

    status: Optional[Status2OrStr] = UNSET
    """The current status of the state machine."""

    definition: str
    """The Amazon States Language definition of the state machine. See Amazon States Language. If called with
    includedData = METADATA_ONLY, the returned definition will be {}."""

    role_arn: str = Field(alias="roleArn")
    """The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role maintains
    security by granting Step Functions access to Amazon Web Services resources.)"""

    type_: Type2OrStr = Field(alias="type")
    """The type of the state machine (STANDARD or EXPRESS)."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date the state machine is created. For a state machine version, creationDate is the date the version was
    created."""

    logging_configuration: Optional[LoggingConfiguration] = Field(default=UNSET, alias="loggingConfiguration")
    tracing_configuration: Optional[TracingConfiguration] = Field(default=UNSET, alias="tracingConfiguration")
    label: Optional[str] = UNSET
    """A user-defined or an auto-generated string that identifies a Map state. This parameter is present only if the
    stateMachineArn specified in input is a qualified state machine ARN."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """The revision identifier for the state machine. Use the revisionId parameter to compare between versions of a
    state machine configuration used for executions without performing a diff of the properties, such as definition and
    roleArn."""

    description: Optional[str] = UNSET
    """The description of the state machine version."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="encryptionConfiguration")
    variable_references: Optional[dict[str, Any]] = Field(default=UNSET, alias="variableReferences")
    """A map of state name to a list of variables referenced by that state. States that do not use variable references
    will not be shown in the response."""


class DescribeStateMachineOutputDict(TypedDict):
    state_machine_arn: str
    name: str
    status: NotRequired[Status2OrStr]
    definition: str
    role_arn: str
    type_: Type2OrStr
    creation_date: RFC3339DateTime
    logging_configuration: NotRequired[LoggingConfigurationDict]
    tracing_configuration: NotRequired[TracingConfigurationDict]
    label: NotRequired[str]
    revision_id: NotRequired[str]
    description: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
    variable_references: NotRequired[dict[str, Any]]
