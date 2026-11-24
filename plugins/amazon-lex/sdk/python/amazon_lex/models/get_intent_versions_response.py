from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent_metadata import IntentMetadata, IntentMetadataDict


class GetIntentVersionsResponse(SdkBaseModel):
    intents: Optional[list[IntentMetadata]] = UNSET
    """An array of IntentMetadata objects, one for each numbered version of the intent plus one for the $LATEST
    version."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching the next page of intent versions. If the response to this call is truncated,
    Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination
    token in the next request."""


class GetIntentVersionsResponseDict(TypedDict):
    intents: NotRequired[list[IntentMetadataDict]]
    next_token: NotRequired[str]
