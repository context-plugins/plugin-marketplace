from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset_role_content_dto import DatasetRoleContentDto, DatasetRoleContentDtoDict


class PublicApiCreateDatasetRoleResponse(SdkBaseModel):
    dataset_role: DatasetRoleContentDto = Field(alias="datasetRole")


class PublicApiCreateDatasetRoleResponseDict(TypedDict):
    dataset_role: DatasetRoleContentDtoDict
