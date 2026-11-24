from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .assigned_variables_details import AssignedVariablesDetails, AssignedVariablesDetailsDict
from .history_event_execution_data_details import HistoryEventExecutionDataDetails, HistoryEventExecutionDataDetailsDict


class StateExitedEventDetails(SdkBaseModel):
    name: str
    r"""The name of the state. A name must not contain: white space brackets { } [ ] wildcard characters ? * special
    characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates
    (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain
    0-9, A-Z, a-z, - and _."""

    output: Optional[str] = UNSET
    """The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in
    UTF-8 encoding."""

    output_details: Optional[HistoryEventExecutionDataDetails] = Field(default=UNSET, alias="outputDetails")
    assigned_variables: Optional[dict[str, str]] = Field(default=UNSET, alias="assignedVariables")
    """Map of variable name and value as a serialized JSON representation."""

    assigned_variables_details: Optional[AssignedVariablesDetails] = Field(
        default=UNSET, alias="assignedVariablesDetails"
    )


class StateExitedEventDetailsDict(TypedDict):
    name: str
    output: NotRequired[str]
    output_details: NotRequired[HistoryEventExecutionDataDetailsDict]
    assigned_variables: NotRequired[dict[str, str]]
    assigned_variables_details: NotRequired[AssignedVariablesDetailsDict]
