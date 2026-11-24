from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .policy import Policy, PolicyDict


class ApiV1PoliciesResponse1(SdkBaseModel):
    policies: list[Policy]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1PoliciesResponse1Dict(TypedDict):
    policies: list[PolicyDict]
    next_cursor: str | None
