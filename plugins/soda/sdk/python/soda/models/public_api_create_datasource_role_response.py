from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datasource_role_content_dto import DatasourceRoleContentDto, DatasourceRoleContentDtoDict


class PublicApiCreateDatasourceRoleResponse(SdkBaseModel):
    datasource_role: DatasourceRoleContentDto = Field(alias="datasourceRole")


class PublicApiCreateDatasourceRoleResponseDict(TypedDict):
    datasource_role: DatasourceRoleContentDtoDict
