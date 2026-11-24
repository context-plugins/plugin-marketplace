from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resolver import Resolver, ResolverDict


class ListResolversResponse(SdkBaseModel):
    resolvers: Optional[list[Resolver]] = UNSET
    """The Resolver objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier to pass in the next request to this operation to return the next set of items in the list."""


class ListResolversResponseDict(TypedDict):
    resolvers: NotRequired[list[ResolverDict]]
    next_token: NotRequired[str]
