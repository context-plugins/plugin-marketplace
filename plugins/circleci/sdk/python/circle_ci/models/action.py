from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Action(SdkBaseModel):
    name: Optional[str] = UNSET
    """The action name"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The action type"""

    status: Optional[str] = UNSET
    """The action status"""

    start_time: Optional[RFC3339DateTime] = UNSET
    """When the action started"""

    end_time: Optional[RFC3339DateTime] = UNSET
    """When the action ended"""

    run_time_millis: Optional[int] = UNSET
    """Action run time in milliseconds"""

    output_url: Optional[str] = UNSET
    """URL to the action output"""


class ActionDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
    status: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    run_time_millis: NotRequired[int]
    output_url: NotRequired[str]
