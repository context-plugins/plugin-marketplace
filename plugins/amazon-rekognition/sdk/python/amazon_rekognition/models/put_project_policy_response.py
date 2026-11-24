from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutProjectPolicyResponse(SdkBaseModel):
    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The ID of the project policy."""


class PutProjectPolicyResponseDict(TypedDict):
    policy_revision_id: NotRequired[str]
