from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .approval import Approval, ApprovalDict


class ApiV1ApprovalsResponse1(SdkBaseModel):
    approvals: list[Approval]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1ApprovalsResponse1Dict(TypedDict):
    approvals: list[ApprovalDict]
    next_cursor: str | None
