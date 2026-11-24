from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Context(SdkBaseModel):
    account_id: Optional[str] = Field(default=UNSET, alias="accountId")
    regions: Optional[list[str]] = UNSET
    status: Optional[str] = UNSET
    """Server-managed per-account deployment status."""


class ContextDict(TypedDict):
    account_id: NotRequired[str]
    regions: NotRequired[list[str]]
    status: NotRequired[str]
