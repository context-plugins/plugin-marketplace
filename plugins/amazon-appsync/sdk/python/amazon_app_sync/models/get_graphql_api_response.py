from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .graphql_api import GraphqlApi, GraphqlApiDict


class GetGraphqlApiResponse(SdkBaseModel):
    graphql_api: Optional[GraphqlApi] = Field(default=UNSET, alias="graphqlApi")


class GetGraphqlApiResponseDict(TypedDict):
    graphql_api: NotRequired[GraphqlApiDict]
