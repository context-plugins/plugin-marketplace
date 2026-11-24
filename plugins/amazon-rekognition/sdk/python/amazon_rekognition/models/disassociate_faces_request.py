from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisassociateFacesRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """The ID of an existing collection containing the UserID."""

    user_id: str = Field(alias="UserId")
    """ID for the existing UserID."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the request to DisassociateFaces. If you use the same token with multiple
    DisassociateFaces requests, the same response is returned. Use ClientRequestToken to prevent the same request from
    being processed more than once."""

    face_ids: list[str] = Field(alias="FaceIds")
    """An array of face IDs to disassociate from the UserID."""


class DisassociateFacesRequestDict(TypedDict):
    collection_id: str
    user_id: str
    client_request_token: NotRequired[str]
    face_ids: list[str]
