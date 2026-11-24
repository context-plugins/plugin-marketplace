from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .logging_configuration import LoggingConfiguration, LoggingConfigurationDict
from .tracing_configuration import TracingConfiguration, TracingConfigurationDict


class UpdateStateMachineInput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine."""

    definition: Optional[str] = UNSET
    """The Amazon States Language definition of the state machine. See Amazon States Language."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of the IAM role of the state machine."""

    logging_configuration: Optional[LoggingConfiguration] = Field(default=UNSET, alias="loggingConfiguration")
    tracing_configuration: Optional[TracingConfiguration] = Field(default=UNSET, alias="tracingConfiguration")
    publish: Optional[bool] = UNSET
    """Specifies whether the state machine version is published. The default is false. To publish a version after
    updating the state machine, set publish to true."""

    version_description: Optional[str] = Field(default=UNSET, alias="versionDescription")
    """An optional description of the state machine version to publish. You can only specify the versionDescription
    parameter if you've set publish to true."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="encryptionConfiguration")


class UpdateStateMachineInputDict(TypedDict):
    state_machine_arn: str
    definition: NotRequired[str]
    role_arn: NotRequired[str]
    logging_configuration: NotRequired[LoggingConfigurationDict]
    tracing_configuration: NotRequired[TracingConfigurationDict]
    publish: NotRequired[bool]
    version_description: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
