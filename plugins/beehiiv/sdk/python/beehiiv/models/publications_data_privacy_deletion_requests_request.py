from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicationsDataPrivacyDeletionRequestsRequest(SdkBaseModel):
    email: str
    """The email address of the subscriber to delete."""


class PublicationsDataPrivacyDeletionRequestsRequestDict(TypedDict):
    email: str
