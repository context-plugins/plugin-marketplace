from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListResourcePoliciesRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Not currently supported."""


class ListResourcePoliciesRequestDict(TypedDict):
    next_token: NotRequired[str]
