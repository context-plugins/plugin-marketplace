from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resolver import Resolver, ResolverDict


class ListResolversByFunctionResponse(SdkBaseModel):
    resolvers: Optional[list[Resolver]] = UNSET
    """The list of resolvers."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier that you can use to return the next set of items in the list."""


class ListResolversByFunctionResponseDict(TypedDict):
    resolvers: NotRequired[list[ResolverDict]]
    next_token: NotRequired[str]
