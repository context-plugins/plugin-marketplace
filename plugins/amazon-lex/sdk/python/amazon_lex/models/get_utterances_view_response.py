from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .utterance_list import UtteranceList, UtteranceListDict


class GetUtterancesViewResponse(SdkBaseModel):
    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot for which utterance information was returned."""

    utterances: Optional[list[UtteranceList]] = UNSET
    """An array of UtteranceList objects, each containing a list of UtteranceData objects describing the utterances that
    were processed by your bot. The response contains a maximum of 100 UtteranceData objects for each version. Amazon
    Lex returns the most frequent utterances received by the bot in the last 15 days."""


class GetUtterancesViewResponseDict(TypedDict):
    bot_name: NotRequired[str]
    utterances: NotRequired[list[UtteranceListDict]]
