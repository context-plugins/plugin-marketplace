from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Summarization(SdkBaseModel):
    generate_abstractive_summary: bool = Field(alias="GenerateAbstractiveSummary")
    """Enables Generative call summarization in your Call Analytics request Generative call summarization provides a
    summary of the transcript including important components discussed in the conversation. For more information, see
    Enabling generative call summarization."""


class SummarizationDict(TypedDict):
    generate_abstractive_summary: bool
