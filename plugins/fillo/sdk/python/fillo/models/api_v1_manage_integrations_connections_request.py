from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageIntegrationsConnectionsRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")


class ApiV1ManageIntegrationsConnectionsRequestDict(TypedDict):
    connection_id: str
