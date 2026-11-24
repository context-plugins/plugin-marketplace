from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueryOverride1(SdkBaseModel):
    """URI query. When specified, replaces the query part of the task URI. Setting the query value to an empty string
    clears the URI query segment."""

    query_params: Optional[str] = Field(default=UNSET, alias="queryParams")
    """The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string."""


class QueryOverride1Dict(TypedDict):
    query_params: NotRequired[str]
