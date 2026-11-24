from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class MapRunListItem(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The executionArn of the execution from which the Map Run was started."""

    map_run_arn: str = Field(alias="mapRunArn")
    """The Amazon Resource Name (ARN) of the Map Run."""

    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the executed state machine."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The date on which the Map Run started."""

    stop_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="stopDate")
    """The date on which the Map Run stopped."""


class MapRunListItemDict(TypedDict):
    execution_arn: str
    map_run_arn: str
    state_machine_arn: str
    start_date: RFC3339DateTime
    stop_date: NotRequired[RFC3339DateTime]
