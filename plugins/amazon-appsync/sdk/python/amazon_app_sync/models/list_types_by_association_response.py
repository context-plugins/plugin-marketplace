from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .type_aws_app_sync_types_api import TypeAwsAppSyncTypesApi, TypeAwsAppSyncTypesApiDict


class ListTypesByAssociationResponse(SdkBaseModel):
    types: Optional[list[TypeAwsAppSyncTypesApi]] = UNSET
    """The Type objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier that was returned from the previous call to this operation, which you can use to return the next
    set of items in the list."""


class ListTypesByAssociationResponseDict(TypedDict):
    types: NotRequired[list[TypeAwsAppSyncTypesApiDict]]
    next_token: NotRequired[str]
