from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.inspection_level import InspectionLevelOrStr
from .mock_input import MockInput, MockInputDict
from .test_state_configuration import TestStateConfiguration, TestStateConfigurationDict


class TestStateInput(SdkBaseModel):
    definition: str
    """The Amazon States Language (ASL) definition of the state or state machine."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of the execution role with the required IAM permissions for the state."""

    input: Optional[str] = UNSET
    """A string that contains the JSON input data for the state."""

    inspection_level: Optional[InspectionLevelOrStr] = Field(default=UNSET, alias="inspectionLevel")
    """Determines the values to return when a state is tested. You can specify one of the following types: INFO: Shows
    the final state output. By default, Step Functions sets inspectionLevel to INFO if you don't specify a level. DEBUG:
    Shows the final state output along with the input and output data processing result. TRACE: Shows the HTTP request
    and response for an HTTP Task. This level also shows the final state output along with the input and output data
    processing result. Each of these levels also provide information about the status of the state execution and the
    next state to transition to."""

    reveal_secrets: Optional[bool] = Field(default=UNSET, alias="revealSecrets")
    """Specifies whether or not to include secret information in the test result. For HTTP Tasks, a secret includes the
    data that an EventBridge connection adds to modify the HTTP request headers, query parameters, and body. Step
    Functions doesn't omit any information included in the state definition or the HTTP response. If you set
    revealSecrets to true, you must make sure that the IAM user that calls the TestState API has permission for the
    states:RevealSecrets action. For an example of IAM policy that sets the states:RevealSecrets permission, see IAM
    permissions to test a state. Without this permi"""

    variables: Optional[str] = UNSET
    """JSON object literal that sets variables used in the state under test. Object keys are the variable names and
    values are the variable values."""

    state_name: Optional[str] = Field(default=UNSET, alias="stateName")
    """Denotes the particular state within a state machine definition to be tested. If this field is specified, the
    definition must contain a fully-formed state machine definition."""

    mock: Optional[MockInput] = UNSET
    context: Optional[str] = UNSET
    """A JSON string representing a valid Context object for the state under test. This field may only be specified if a
    mock is specified in the same request."""

    state_configuration: Optional[TestStateConfiguration] = Field(default=UNSET, alias="stateConfiguration")


class TestStateInputDict(TypedDict):
    definition: str
    role_arn: NotRequired[str]
    input: NotRequired[str]
    inspection_level: NotRequired[InspectionLevelOrStr]
    reveal_secrets: NotRequired[bool]
    variables: NotRequired[str]
    state_name: NotRequired[str]
    mock: NotRequired[MockInputDict]
    context: NotRequired[str]
    state_configuration: NotRequired[TestStateConfigurationDict]
