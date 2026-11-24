from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .builtin_intent_metadata import BuiltinIntentMetadata, BuiltinIntentMetadataDict


class GetBuiltinIntentsResponse(SdkBaseModel):
    intents: Optional[list[BuiltinIntentMetadata]] = UNSET
    """An array of builtinIntentMetadata objects, one for each intent in the response."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon
    Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in
    the next request."""


class GetBuiltinIntentsResponseDict(TypedDict):
    intents: NotRequired[list[BuiltinIntentMetadataDict]]
    next_token: NotRequired[str]
