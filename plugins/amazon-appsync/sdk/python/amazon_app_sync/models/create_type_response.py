from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .type_aws_app_sync_types_api import TypeAwsAppSyncTypesApi, TypeAwsAppSyncTypesApiDict


class CreateTypeResponse(SdkBaseModel):
    type_: Optional[TypeAwsAppSyncTypesApi] = Field(default=UNSET, alias="type")


class CreateTypeResponseDict(TypedDict):
    type_: NotRequired[TypeAwsAppSyncTypesApiDict]
