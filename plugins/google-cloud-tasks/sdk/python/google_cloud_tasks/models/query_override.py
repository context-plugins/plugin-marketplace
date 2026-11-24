from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueryOverride(SdkBaseModel):
    """QueryOverride. Query message defines query override for HTTP targets."""

    query_params: Optional[str] = Field(default=UNSET, alias="queryParams")
    """The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string."""


class QueryOverrideDict(TypedDict):
    query_params: NotRequired[str]
