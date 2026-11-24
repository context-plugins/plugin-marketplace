from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.type4 import Type4OrStr


class StateMachineListItem(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) that identifies the state machine."""

    name: str
    r"""The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard characters ? *
    special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates
    (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain
    0-9, A-Z, a-z, - and _."""

    type_: Type4OrStr = Field(alias="type")
    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date the state machine is created."""


class StateMachineListItemDict(TypedDict):
    state_machine_arn: str
    name: str
    type_: Type4OrStr
    creation_date: RFC3339DateTime
