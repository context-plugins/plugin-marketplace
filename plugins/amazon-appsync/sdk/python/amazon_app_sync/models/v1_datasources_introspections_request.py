from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rds_data_api_config import RdsDataApiConfig, RdsDataApiConfigDict


class V1DatasourcesIntrospectionsRequest(SdkBaseModel):
    rds_data_api_config: Optional[RdsDataApiConfig] = Field(default=UNSET, alias="rdsDataApiConfig")


class V1DatasourcesIntrospectionsRequestDict(TypedDict):
    rds_data_api_config: NotRequired[RdsDataApiConfigDict]
