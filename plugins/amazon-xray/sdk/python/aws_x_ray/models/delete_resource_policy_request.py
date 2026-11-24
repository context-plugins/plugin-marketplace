from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteResourcePolicyRequest(SdkBaseModel):
    policy_name: str = Field(alias="PolicyName")
    """The name of the resource policy to delete."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """Specifies a specific policy revision to delete. Provide a PolicyRevisionId to ensure an atomic delete operation.
    If the provided revision id does not match the latest policy revision id, an InvalidPolicyRevisionIdException
    exception is returned."""


class DeleteResourcePolicyRequestDict(TypedDict):
    policy_name: str
    policy_revision_id: NotRequired[str]
