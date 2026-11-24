from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.redrive_filter import RedriveFilterOrStr
from .enums.status_filter import StatusFilterOrStr


class ListExecutionsInput(SdkBaseModel):
    state_machine_arn: Optional[str] = Field(default=UNSET, alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine whose executions is listed. You can specify either a
    mapRunArn or a stateMachineArn, but not both. You can also return a list of executions associated with a specific
    alias or version, by specifying an alias ARN or a version ARN in the stateMachineArn parameter."""

    status_filter: Optional[StatusFilterOrStr] = Field(default=UNSET, alias="statusFilter")
    """If specified, only list the executions whose current execution status matches the given filter. If you provide a
    PENDING_REDRIVE statusFilter, you must specify mapRunArn. For more information, see Child workflow execution redrive
    behaviour in the Step Functions Developer Guide. If you provide a stateMachineArn and a PENDING_REDRIVE
    statusFilter, the API returns a validation exception."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results that are returned per call. You can use nextToken to obtain further pages of
    results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only
    an upper limit. The actual number of results returned per call might be fewer than the specified maximum."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
    for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
    unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400
    InvalidToken error."""

    map_run_arn: Optional[str] = Field(default=UNSET, alias="mapRunArn")
    """The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If the mapRunArn field
    is specified, a list of all of the child workflow executions started by a Map Run is returned. For more information,
    see Examining Map Run in the Step Functions Developer Guide. You can specify either a mapRunArn or a
    stateMachineArn, but not both."""

    redrive_filter: Optional[RedriveFilterOrStr] = Field(default=UNSET, alias="redriveFilter")
    """Sets a filter to list executions based on whether or not they have been redriven. For a Distributed Map,
    redriveFilter sets a filter to list child workflow executions based on whether or not they have been redriven. If
    you do not provide a redriveFilter, Step Functions returns a list of both redriven and non-redriven executions. If
    you provide a state machine ARN in redriveFilter, the API returns a validation exception."""


class ListExecutionsInputDict(TypedDict):
    state_machine_arn: NotRequired[str]
    status_filter: NotRequired[StatusFilterOrStr]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    map_run_arn: NotRequired[str]
    redrive_filter: NotRequired[RedriveFilterOrStr]
