from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .utterance_data import UtteranceData, UtteranceDataDict


class UtteranceList(SdkBaseModel):
    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that processed the list."""

    utterances: Optional[list[UtteranceData]] = UNSET
    """One or more UtteranceData objects that contain information about the utterances that have been made to a bot. The
    maximum number of object is 100."""


class UtteranceListDict(TypedDict):
    bot_version: NotRequired[str]
    utterances: NotRequired[list[UtteranceDataDict]]
