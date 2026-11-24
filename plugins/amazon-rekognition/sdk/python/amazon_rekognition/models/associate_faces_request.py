from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssociateFacesRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """The ID of an existing collection containing the UserID."""

    user_id: str = Field(alias="UserId")
    """The ID for the existing UserID."""

    face_ids: list[str] = Field(alias="FaceIds")
    """An array of FaceIDs to associate with the UserID."""

    user_match_threshold: Optional[float] = Field(default=UNSET, alias="UserMatchThreshold")
    """An optional value specifying the minimum confidence in the UserID match to return. The default value is 75."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the request to AssociateFaces. If you use the same token with multiple
    AssociateFaces requests, the same response is returned. Use ClientRequestToken to prevent the same request from
    being processed more than once."""


class AssociateFacesRequestDict(TypedDict):
    collection_id: str
    user_id: str
    face_ids: list[str]
    user_match_threshold: NotRequired[float]
    client_request_token: NotRequired[str]
