from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1DomainnamesApiassociationRequest(SdkBaseModel):
    api_id: str = Field(alias="apiId")
    """The API ID. Private APIs can not be associated with custom domains."""


class V1DomainnamesApiassociationRequestDict(TypedDict):
    api_id: str
