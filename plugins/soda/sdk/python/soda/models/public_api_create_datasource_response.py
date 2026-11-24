from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_datasource_dto import PublicApiDatasourceDto, PublicApiDatasourceDtoDict


class PublicApiCreateDatasourceResponse(SdkBaseModel):
    datasource: Optional[PublicApiDatasourceDto] = UNSET
    discovery_scan_id: Optional[str] = Field(default=UNSET, alias="discoveryScanId")


class PublicApiCreateDatasourceResponseDict(TypedDict):
    datasource: NotRequired[PublicApiDatasourceDtoDict]
    discovery_scan_id: NotRequired[str]
