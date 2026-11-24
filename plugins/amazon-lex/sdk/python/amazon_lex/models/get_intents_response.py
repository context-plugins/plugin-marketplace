from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent_metadata import IntentMetadata, IntentMetadataDict


class GetIntentsResponse(SdkBaseModel):
    intents: Optional[list[IntentMetadata]] = UNSET
    """An array of Intent objects. For more information, see PutBot."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response is truncated, the response includes a pagination token that you can specify in your next request
    to fetch the next page of intents."""


class GetIntentsResponseDict(TypedDict):
    intents: NotRequired[list[IntentMetadataDict]]
    next_token: NotRequired[str]
