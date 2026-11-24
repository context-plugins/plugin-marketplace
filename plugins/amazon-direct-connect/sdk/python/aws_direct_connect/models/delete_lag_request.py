from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteLagRequest(SdkBaseModel):
    lag_id: str = Field(alias="lagId")
    """The ID of the LAG."""


class DeleteLagRequestDict(TypedDict):
    lag_id: str
