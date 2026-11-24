from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AudioSpecification(SdkBaseModel):
    max_length_ms: int = Field(alias="maxLengthMs")
    """Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application."""

    end_timeout_ms: int = Field(alias="endTimeoutMs")
    """Time for which a bot waits after the customer stops speaking to assume the utterance is finished."""


class AudioSpecificationDict(TypedDict):
    max_length_ms: int
    end_timeout_ms: int
