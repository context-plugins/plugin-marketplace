from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_datasource_dto import PublicApiDatasourceDto, PublicApiDatasourceDtoDict


class PublicApiGetDatasourceResponse(SdkBaseModel):
    datasource: Optional[PublicApiDatasourceDto] = UNSET


class PublicApiGetDatasourceResponseDict(TypedDict):
    datasource: NotRequired[PublicApiDatasourceDtoDict]
