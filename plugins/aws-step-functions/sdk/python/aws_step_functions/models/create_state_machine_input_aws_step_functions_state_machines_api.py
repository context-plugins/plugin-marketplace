from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_configuration_aws_step_functions_state_machines_api import (
    EncryptionConfigurationAwsStepFunctionsStateMachinesApi,
    EncryptionConfigurationAwsStepFunctionsStateMachinesApiDict,
)
from .enums.type_aws_step_functions_state_machines_api import TypeAwsStepFunctionsStateMachinesApiOrStr
from .logging_configuration import LoggingConfiguration, LoggingConfigurationDict
from .tag_model import TagModel, TagModelDict
from .tracing_configuration import TracingConfiguration, TracingConfigurationDict


class CreateStateMachineInputAwsStepFunctionsStateMachinesApi(SdkBaseModel):
    name: str
    r"""The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard characters ? *
    special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates
    (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain
    0-9, A-Z, a-z, - and _."""

    definition: str
    """The Amazon States Language definition of the state machine. See Amazon States Language."""

    role_arn: str = Field(alias="roleArn")
    """The Amazon Resource Name (ARN) of the IAM role to use for this state machine."""

    type_: Optional[TypeAwsStepFunctionsStateMachinesApiOrStr] = Field(default=UNSET, alias="type")
    """Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the
    type of a state machine once it has been created."""

    logging_configuration: Optional[LoggingConfiguration] = Field(default=UNSET, alias="loggingConfiguration")
    tags: Optional[list[TagModel]] = UNSET
    """Tags to be added when creating a state machine. An array of key-value pairs. For more information, see Using Cost
    Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM
    Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @."""

    tracing_configuration: Optional[TracingConfiguration] = Field(default=UNSET, alias="tracingConfiguration")
    publish: Optional[bool] = UNSET
    """Set to true to publish the first version of the state machine during creation. The default is false."""

    version_description: Optional[str] = Field(default=UNSET, alias="versionDescription")
    """Sets description about the state machine version. You can only set the description if the publish parameter is
    set to true. Otherwise, if you set versionDescription, but publish to false, this API action throws
    ValidationException."""

    encryption_configuration: Optional[EncryptionConfigurationAwsStepFunctionsStateMachinesApi] = Field(
        default=UNSET, alias="encryptionConfiguration"
    )


class CreateStateMachineInputAwsStepFunctionsStateMachinesApiDict(TypedDict):
    name: str
    definition: str
    role_arn: str
    type_: NotRequired[TypeAwsStepFunctionsStateMachinesApiOrStr]
    logging_configuration: NotRequired[LoggingConfigurationDict]
    tags: NotRequired[list[TagModelDict]]
    tracing_configuration: NotRequired[TracingConfigurationDict]
    publish: NotRequired[bool]
    version_description: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationAwsStepFunctionsStateMachinesApiDict]
