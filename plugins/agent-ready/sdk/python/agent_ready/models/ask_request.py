from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .context import Context, ContextDict
from .enums.item_type import ItemTypeOrStr
from .enums.mode2 import Mode2OrStr
from .meta import Meta, MetaDict
from .prefer import Prefer, PreferDict
from .unions.query2 import Query2, Query2Dict
from .unions.streaming import Streaming, StreamingDict


class AskRequest(SdkBaseModel):
    """NLWeb /ask request. The spec shape is ``{ query: { text } }``; the legacy string and ``{ query: { q } }`` forms
    plus a ``prefer`` envelope are also accepted."""

    query: Query2
    mode: Optional[Mode2OrStr] = UNSET
    streaming: Optional[Streaming] = UNSET
    item_type: Optional[ItemTypeOrStr] = Field(default=UNSET, alias="itemType")
    """Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything."""

    site: Optional[str] = UNSET
    query_id: Optional[str] = UNSET
    prev: Optional[str] = UNSET
    decontextualized_query: Optional[str] = UNSET
    prefer: Optional[Prefer] = UNSET
    context: Optional[list[Context]] = UNSET
    meta: Optional[Meta] = UNSET


class AskRequestDict(TypedDict):
    query: Query2Dict
    mode: NotRequired[Mode2OrStr]
    streaming: NotRequired[StreamingDict]
    item_type: NotRequired[ItemTypeOrStr]
    site: NotRequired[str]
    query_id: NotRequired[str]
    prev: NotRequired[str]
    decontextualized_query: NotRequired[str]
    prefer: NotRequired[PreferDict]
    context: NotRequired[list[ContextDict]]
    meta: NotRequired[MetaDict]
