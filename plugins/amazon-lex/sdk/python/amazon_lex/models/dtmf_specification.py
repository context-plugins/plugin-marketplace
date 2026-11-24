from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DtmfSpecification(SdkBaseModel):
    max_length: int = Field(alias="maxLength")
    """The maximum number of DTMF digits allowed in an utterance."""

    end_timeout_ms: int = Field(alias="endTimeoutMs")
    """How long the bot should wait after the last DTMF character input before assuming that the input has concluded."""

    deletion_character: str = Field(alias="deletionCharacter")
    """The DTMF character that clears the accumulated DTMF digits and immediately ends the input."""

    end_character: str = Field(alias="endCharacter")
    """The DTMF character that immediately ends input. If the user does not press this character, the input ends after
    the end timeout."""


class DtmfSpecificationDict(TypedDict):
    max_length: int
    end_timeout_ms: int
    deletion_character: str
    end_character: str
