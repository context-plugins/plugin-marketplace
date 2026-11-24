from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MergeUserAttributesRequest(SdkBaseModel):
    """Parameters for merging two user identity records."""

    source_user_uid: str = Field(alias="sourceUserUid")
    """The UID of the source user whose attributes will be merged into the target. Typically the anonymous user UID."""

    target_user_uid: str = Field(alias="targetUserUid")
    """The UID of the target user who will receive the merged attributes. Typically the authenticated user UID."""


class MergeUserAttributesRequestDict(TypedDict):
    source_user_uid: str
    target_user_uid: str
