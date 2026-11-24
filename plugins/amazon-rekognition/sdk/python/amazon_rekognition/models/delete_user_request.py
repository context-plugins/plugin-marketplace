from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteUserRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """The ID of an existing collection from which the UserID needs to be deleted."""

    user_id: str = Field(alias="UserId")
    """ID for the UserID to be deleted."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the request to DeleteUser. If you use the same token with multiple DeleteUser
    requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed
    more than once."""


class DeleteUserRequestDict(TypedDict):
    collection_id: str
    user_id: str
    client_request_token: NotRequired[str]
