from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .graphql_api import GraphqlApi, GraphqlApiDict


class ListGraphqlApisResponse(SdkBaseModel):
    graphql_apis: Optional[list[GraphqlApi]] = Field(default=UNSET, alias="graphqlApis")
    """The GraphqlApi objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier to pass in the next request to this operation to return the next set of items in the list."""


class ListGraphqlApisResponseDict(TypedDict):
    graphql_apis: NotRequired[list[GraphqlApiDict]]
    next_token: NotRequired[str]
