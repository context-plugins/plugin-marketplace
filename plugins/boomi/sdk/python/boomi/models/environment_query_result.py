from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment_model import EnvironmentModel, EnvironmentModelDict


class EnvironmentQueryResult(SdkBaseModel):
    """Paginated query results for environments."""

    number_of_results: Optional[int] = Field(default=UNSET, alias="numberOfResults")
    """Total number of matching records."""

    query_token: Optional[str] = Field(default=UNSET, alias="queryToken")
    """Token for retrieving the next page of results."""

    result: Optional[list[EnvironmentModel]] = UNSET


class EnvironmentQueryResultDict(TypedDict):
    number_of_results: NotRequired[int]
    query_token: NotRequired[str]
    result: NotRequired[list[EnvironmentModelDict]]
