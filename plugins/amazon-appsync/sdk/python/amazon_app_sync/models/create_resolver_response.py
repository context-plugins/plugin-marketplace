from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resolver import Resolver, ResolverDict


class CreateResolverResponse(SdkBaseModel):
    resolver: Optional[Resolver] = UNSET


class CreateResolverResponseDict(TypedDict):
    resolver: NotRequired[ResolverDict]
