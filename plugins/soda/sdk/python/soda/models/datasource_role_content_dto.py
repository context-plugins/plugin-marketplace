from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatasourceRoleContentDto(SdkBaseModel):
    create_datasets: Optional[bool] = Field(default=UNSET, alias="createDatasets")
    delete_datasource: Optional[bool] = Field(default=UNSET, alias="deleteDatasource")
    id: str
    manage_datasource_settings: Optional[bool] = Field(default=UNSET, alias="manageDatasourceSettings")
    manage_permissions: Optional[bool] = Field(default=UNSET, alias="managePermissions")
    name: str
    view_datasource: Optional[bool] = Field(default=UNSET, alias="viewDatasource")


class DatasourceRoleContentDtoDict(TypedDict):
    create_datasets: NotRequired[bool]
    delete_datasource: NotRequired[bool]
    id: str
    manage_datasource_settings: NotRequired[bool]
    manage_permissions: NotRequired[bool]
    name: str
    view_datasource: NotRequired[bool]
