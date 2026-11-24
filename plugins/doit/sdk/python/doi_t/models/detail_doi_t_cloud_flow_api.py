from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DetailDoiTCloudFlowApi(SdkBaseModel):
    node_id: str = Field(alias="nodeId")
    message: str


class DetailDoiTCloudFlowApiDict(TypedDict):
    node_id: str
    message: str
