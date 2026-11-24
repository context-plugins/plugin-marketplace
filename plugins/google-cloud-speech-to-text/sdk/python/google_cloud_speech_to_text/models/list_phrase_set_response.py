from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phrase_set import PhraseSet, PhraseSetDict


class ListPhraseSetResponse(SdkBaseModel):
    """Message returned to the client by the ``ListPhraseSet`` method."""

    phrase_sets: Optional[list[PhraseSet]] = Field(default=UNSET, alias="phraseSets")
    """The phrase set."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class ListPhraseSetResponseDict(TypedDict):
    phrase_sets: NotRequired[list[PhraseSetDict]]
    next_page_token: NotRequired[str]
