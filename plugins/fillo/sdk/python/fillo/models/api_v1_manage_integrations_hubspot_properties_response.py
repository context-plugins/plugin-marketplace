from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .property import Property, PropertyDict


class ApiV1ManageIntegrationsHubspotPropertiesResponse(SdkBaseModel):
    properties: list[Property]


class ApiV1ManageIntegrationsHubspotPropertiesResponseDict(TypedDict):
    properties: list[PropertyDict]
