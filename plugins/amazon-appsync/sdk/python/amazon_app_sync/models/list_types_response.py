from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .type_aws_app_sync_types_api import TypeAwsAppSyncTypesApi, TypeAwsAppSyncTypesApiDict


class ListTypesResponse(SdkBaseModel):
    types: Optional[list[TypeAwsAppSyncTypesApi]] = UNSET
    """The Type objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier to pass in the next request to this operation to return the next set of items in the list."""


class ListTypesResponseDict(TypedDict):
    types: NotRequired[list[TypeAwsAppSyncTypesApiDict]]
    next_token: NotRequired[str]
