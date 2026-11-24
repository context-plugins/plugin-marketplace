from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .flow import Flow, FlowDict


class ApiV1FlowsResponse1(SdkBaseModel):
    flows: list[Flow]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1FlowsResponse1Dict(TypedDict):
    flows: list[FlowDict]
    next_cursor: str | None
