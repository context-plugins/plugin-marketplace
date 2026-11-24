from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Data1(SdkBaseModel):
    job_id: str = Field(alias="jobId")
    status: Literal["completed"] = "completed"
    result: Any
    """The endpoint payload — the SAME unified schema the synchronous call returns (Property[] | Availability[] | Price
    | PriceCompare | Review[])."""


class Data1Dict(TypedDict):
    job_id: str
    status: Literal["completed"]
    result: Any
