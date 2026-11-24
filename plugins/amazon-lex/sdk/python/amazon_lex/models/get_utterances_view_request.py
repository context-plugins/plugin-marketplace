from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_type import StatusTypeOrStr


class GetUtterancesViewRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the bot for which utterance information should be returned."""

    bot_versions: list[str] = Field(alias="botVersions")
    """An array of bot versions for which utterance information should be returned. The limit is 5 versions per
    request."""

    status_type: StatusTypeOrStr = Field(alias="statusType")
    """To return utterances that were recognized and handled, use Detected. To return utterances that were not
    recognized, use Missed."""


class GetUtterancesViewRequestDict(TypedDict):
    bot_name: str
    bot_versions: list[str]
    status_type: StatusTypeOrStr
