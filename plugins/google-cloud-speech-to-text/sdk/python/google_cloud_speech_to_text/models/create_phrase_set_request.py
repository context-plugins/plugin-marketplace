from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phrase_set2 import PhraseSet2, PhraseSet2Dict


class CreatePhraseSetRequest(SdkBaseModel):
    """Message sent by the client for the ``CreatePhraseSet`` method."""

    phrase_set_id: Optional[str] = Field(default=UNSET, alias="phraseSetId")
    """Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource
    name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a
    letter or a number, and be 4-63 characters."""

    phrase_set: Optional[PhraseSet2] = Field(default=UNSET, alias="phraseSet")
    """Required. The phrase set to create."""


class CreatePhraseSetRequestDict(TypedDict):
    phrase_set_id: NotRequired[str]
    phrase_set: NotRequired[PhraseSet2Dict]
