from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .start_info import StartInfo, StartInfoDict


class StartJobsRequest(SdkBaseModel):
    """Request payload for starting one or more automation jobs"""

    start_info: StartInfo = Field(alias="startInfo")
    """Parameters controlling how jobs are started"""


class StartJobsRequestDict(TypedDict):
    start_info: StartInfoDict
