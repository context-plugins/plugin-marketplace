from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiDeleteDatasourceRoleResponse(SdkBaseModel):
    message: str


class PublicApiDeleteDatasourceRoleResponseDict(TypedDict):
    message: str
