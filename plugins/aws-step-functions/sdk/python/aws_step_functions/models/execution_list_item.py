from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class ExecutionListItem(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) that identifies the execution."""

    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine that ran the execution."""

    name: str
    r"""The name of the execution. A name must not contain: white space brackets { } [ ] wildcard characters ? * special
    characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates
    (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain
    0-9, A-Z, a-z, - and _."""

    status: StatusOrStr
    """The current status of the execution."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The date the execution started."""

    stop_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="stopDate")
    """If the execution already ended, the date the execution stopped."""

    map_run_arn: Optional[str] = Field(default=UNSET, alias="mapRunArn")
    """The Amazon Resource Name (ARN) of a Map Run. This field is returned only if mapRunArn was specified in the
    ListExecutions API action. If stateMachineArn was specified in ListExecutions, the mapRunArn isn't returned."""

    item_count: Optional[int] = Field(default=UNSET, alias="itemCount")
    """The total number of items processed in a child workflow execution. This field is returned only if mapRunArn was
    specified in the ListExecutions API action. If stateMachineArn was specified in ListExecutions, the itemCount field
    isn't returned."""

    state_machine_version_arn: Optional[str] = Field(default=UNSET, alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) of the state machine version associated with the execution. If the state machine
    execution was started with an unqualified ARN, it returns null. If the execution was started using a
    stateMachineAliasArn, both the stateMachineAliasArn and stateMachineVersionArn parameters contain the respective
    values."""

    state_machine_alias_arn: Optional[str] = Field(default=UNSET, alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) of the state machine alias used to start an execution. If the state machine
    execution was started with an unqualified ARN or a version ARN, it returns null."""

    redrive_count: Optional[int] = Field(default=UNSET, alias="redriveCount")
    """The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is
    0. This count is only updated when you successfully redrive an execution."""

    redrive_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="redriveDate")
    """The date the execution was last redriven."""


class ExecutionListItemDict(TypedDict):
    execution_arn: str
    state_machine_arn: str
    name: str
    status: StatusOrStr
    start_date: RFC3339DateTime
    stop_date: NotRequired[RFC3339DateTime]
    map_run_arn: NotRequired[str]
    item_count: NotRequired[int]
    state_machine_version_arn: NotRequired[str]
    state_machine_alias_arn: NotRequired[str]
    redrive_count: NotRequired[int]
    redrive_date: NotRequired[RFC3339DateTime]
