from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_boomi_data_hub_sources_api import SourceBoomiDataHubSourcesApi, SourceBoomiDataHubSourcesApiDict


class RepositoriesSourcesResponse(SdkBaseModel):
    sources: Optional[list[SourceBoomiDataHubSourcesApi]] = UNSET


class RepositoriesSourcesResponseDict(TypedDict):
    sources: NotRequired[list[SourceBoomiDataHubSourcesApiDict]]
