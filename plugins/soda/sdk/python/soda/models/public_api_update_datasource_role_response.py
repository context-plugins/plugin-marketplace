from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datasource_role_content_dto import DatasourceRoleContentDto, DatasourceRoleContentDtoDict


class PublicApiUpdateDatasourceRoleResponse(SdkBaseModel):
    datasource_role: DatasourceRoleContentDto = Field(alias="datasourceRole")


class PublicApiUpdateDatasourceRoleResponseDict(TypedDict):
    datasource_role: DatasourceRoleContentDtoDict
